import React from 'react';
import Header from './Header.js';
import './App.css';

class Homepage extends React.Component{
    render(){
      return (
        <div>
          <Header />
          <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">
                        
                    </div>
                    <div class="col-md-auto">
                      <p class="greetings">Hello, <span id="username">user!</span></p>
                    </div>
                    <div class="col col-lg-2">     
                    </div>
                </div>
            </div>
                
        </div>
      );
    }
}

export default Homepage;
