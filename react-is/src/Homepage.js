import React from 'react';
import Header from './Header.js';
import './App.css';

function Homepage() {
  return (
    <div>
      <Header />
      <div class="row">
        <h1 class = "makeMiddle col-lg-4 col-sm-4">Hello, User</h1>
        {/* <button class = "" type="submit" id="trf-button">Transfer</button>
        <button class = "" type="submit" id="trsc-button">Transaction History</button> */}
      </div>
    </div>
  )
}

export default Homepage;
