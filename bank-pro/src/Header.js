import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Header() {
  return (

    <div className="Header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <div class="ml-2">
                <Link to="/homepage"><img src="tesuto.png"></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item ml-4">
                        <Link to="/homepage">Transfer</Link>
                    </li>
                    <li class="nav-item ml-4">
                        <Link to="/transaction">Transaction History</Link>
                    </li>
                    <li class="nav-item">
                        <span class="navbar-right">
                            <Link to="/transaction">Logout</Link>
                        </span>
                        
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header;
