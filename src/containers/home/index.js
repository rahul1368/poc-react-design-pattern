import React from "react";
import { Link } from "react-router-dom";

export const Home = (props)=>(
    <div className="home">
        <h1>Container App.</h1>
        <ul style={{ margin:"0 0"}}>
          <li style={{ listStyle:"none"}}>
            <Link to="/investment">Investment</Link>
          </li>
          <li style={{ listStyle:"none"}}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        {/* Todos */}
      <ul>
        {
          props.todoListdata && props.todoListdata.length > 0 &&
          props.todoListdata.map((todo,index)=>{
            return <li key={index}>{todo.value}</li>
          }) 
        }
      </ul>
    </div>
) 