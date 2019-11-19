import React from 'react';
import './App.css';

function Login() {
  return (
    <div className="row">
      <header className="Login-header col-lg-4">
      <img src="logo.png"></img>
        <form>
          <input type= "text" name="noRekening" id ="noRekening"  placeholder="Nomor Rekening" required/>
          <button id = "button_login">Login</button>
        </form>
      </header>
    </div>
  )
}

export default Login;
