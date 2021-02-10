import "./App.css";
import React,{ Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers/home";
const Investment =  React.lazy(()=>import("./containers/investment"));
const Dashboard =  React.lazy(()=>import("./containers/dashboard"));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/investment">
            <Suspense fallback={<div>Loading...</div>}>
              <Investment />
            </Suspense>
          </Route>
          <Route path="/dashboard">
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
