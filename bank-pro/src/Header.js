import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Header() {
  return (

    <div className="Header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top navbar-center">
            <div class="navbar-collapse collapse w-100 dual-collapse2 order-0 order-md-0">
                <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Transfer</a>
                    </li>
                </ul>
            </div>
            <div class="mx-auto my-2 order-1 order-md-1 position-relative">
                <Link to="/homepage"><img src="Picture1.png" class="rounded-circle"></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mr-auto">
                        <Link to="/transaction" activeClassName="nav-link">Transaction History</Link>
                    </li>
                    <li class="nav-item mr-auto logout">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
</nav>
    </div>
  )
}

export default Header;
