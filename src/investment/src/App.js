import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home';
/**
 * Below modules are lazy loadable
 */
import Account from "./containers/Account/Loadable";
import BankDetails from "./containers/BankDetails/Loadable";
import Pan from './containers/Pan/Loadable';
import Payment from "./containers/Payment/Loadable";

function App(props) {
  return (
    <div className="investment">
      <h1>Investment App (Micro App 1)</h1>
      <Router>
        <Switch>
          <Route path="/investment/pan" exact={true} component={Pan} />
          <Route path="/investment/bank-details" exact={true} component={BankDetails} />
          <Route path="/investment/payment" exact={true} component={Payment} />
          <Route path="/investment/account" exact={true} component={Account} />
          <Route path="/investment"  component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
