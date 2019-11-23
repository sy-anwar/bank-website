import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import TransactionHistory from './TransactionHistory.js';
import Homepage from './Homepage.js';
import Login from './Login.js';
import Transfer from './Transfer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Class App.
 */
class App extends React.Component {
  /**
   * render method.
   * @return {*} component.
   */
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/transaction" component={TransactionHistory} />
          <Route exact path="/transfer" component={Transfer}/>
        </div>
      </Router>
    );
  }
}

export default App;
