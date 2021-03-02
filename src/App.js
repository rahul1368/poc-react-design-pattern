import "./ContainerApp.css";
import React,{ Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from './containers/home';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_INVESTMENT_HOST: investmentHost,
  REACT_APP_DASHBOARD_HOST: dashboardHost,
} = process.env;


const Investment = ({ history }) => (
  <MicroFrontend history={history} host={investmentHost} name="Investment" />
);
const Dashboard = ({ history }) => (
  <MicroFrontend history={history} host={dashboardHost} name="Dashboard" />
);
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path={["/investment","/investment/*"]} component={Investment} />
          <Route exact path={["/dashboard","/dashboard/*"]} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
