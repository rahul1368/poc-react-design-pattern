import "./ContainerApp.css";
import React,{ Suspense ,useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from './containers/home';
import MicroFrontend from './MicroFrontend';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slices/todoSlice';
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
  const dispatch = useDispatch();
  const todoListdata = useSelector(state => state.todos.todoList);
  const apiStatus = useSelector(state => state.todos.status);
  useEffect(() => {
    if (apiStatus === 'idle') {
      dispatch(fetchTodos());
    }
  }, [apiStatus, dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  render={props=><Home {...props} todoListdata={todoListdata} />}/>
          <Route exact path={["/investment","/investment/*"]} component={Investment} />
          <Route exact path={["/dashboard","/dashboard/*"]} component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
