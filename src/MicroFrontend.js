import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name,host,document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }
    fetch(`${host}/asset-manifest.json`)
      .then((res) => {return res.json()})
      .then(manifest => {
        const promises = Object.keys(manifest['entrypoints'])
          .filter(key => manifest['entrypoints'][key].endsWith('.js'))
          .reduce((sum, key) => {
            sum.push(
              new Promise(resolve => {
                const path = `${host}/${manifest['entrypoints'][key]}`;
                const script = document.createElement('script');
                if (manifest['entrypoints'][key] === 'main.js') {
                  script.id = scriptId;
                }
                script.onload = () => {
                  resolve();
                };
                script.src = path;
                document.head.appendChild(script);
              })
            );
            return sum;
          }, []);
        Promise.allSettled(promises).then(() => {
          this.renderMicroFrontend();
        });
      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    window[`render${name}`] &&
      window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window
};

export default MicroFrontend;
