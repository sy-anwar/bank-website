import React from 'react';
import Header from './Header.js';
import './App.css';

function TransactionHistory(props) {
  return (
    <div>
      <Header />
      <div class="container">
            <div class="row justify-content-md-center">
                <div class="col col-lg-2">
                    
                </div>
                <div class="col-md-auto">
                    <h1 class="greetings">Transaction History</h1>
                </div>
                <div class="col col-lg-2">
                    
                </div>
            </div>
        </div>
      <table class="table table-dark table-bordered table-hover">
        <thead class="thead-light">
            <tr>
                <th scope="col">Rekening</th>
                <th scope="col">Waktu</th>
                <th scope="col">Tipe</th>
                <th scope="col">Nominal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="rekening" class=" table-striped">a</td>
                <td id="waktu">a</td>
                <td id="tipe" class="table-striped">a</td>
                <td id="nominal">a</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory;
