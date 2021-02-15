import "./ContainerApp.css";
import React,{ Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from './containers/home';
//const Investment =  React.lazy(()=>import("./containers/investment"));
//const Dashboard =  React.lazy(()=>import("./containers/dashboard"));
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_INVESTMENT_HOST: investmentHost,
  REACT_APP_DASHBOARD_HOST: dashboardHost,
} = process.env;

console.error("env vars=>",process.env)

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
          <Route exact path="/investment" component={Investment} />
          <Route exact path="/dashboard" component={Dashboard} />
            
          
          {/* <Route path="/investment">
            <Suspense fallback={<div>Loading...</div>}>
              <Investment />
            </Suspense>
          </Route>
          <Route path="/dashboard">
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
