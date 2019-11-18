import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import TransactionHistory from './TransactionHistory.js';
import Homepage from './Homepage.js';
import Login from './Login.js';

function App() {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/transaction" component={TransactionHistory} />
        </div>
      </Router>
  );
}

export default App;
