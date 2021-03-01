import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.renderDashboard = (containerId, history) => {
  ReactDOM.render(
    <React.StrictMode><App history={history} key="dashboardApp" /></React.StrictMode>,
    document.getElementById(containerId),
  );
};

window.unmountDashboard = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
