import React from "react";
import { Link } from "react-router-dom";

export const Home = (props)=>(
    <div>
        <h1>This is home component.</h1>
        <ul>
          <li>
            <Link to="/investment">Investment</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
    </div>
) 