import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    let modulesMap = [
        {
            moduleName:"Pan",
            modulePath:"/investment/pan"
        },
        {
            moduleName:"Bank Details",
            modulePath:"/investment/bank-details"
        },
        {
            moduleName:"Payment",
            modulePath:"/investment/payment"
        },
        {
            moduleName:"Account",
            modulePath:"/investment/account"
        },
    ]
    return(<div className="investmentHome">
        <h3>Investment Home Page</h3>
        <div className="homeBody">
            <ul>
                {
                    modulesMap.map((module,index) => {
                        return(
                            <li key={index}>
                                <Link to={module.modulePath}>{module.moduleName}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>)
}