import logo from './logo.svg';
import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { Home } from "./components/home"


export const App = () => {
  return (
    <div className="App">
      <h1>Taş Kağıt Makas</h1>
      <img src="img/tas.jpg" />
      <img src="img/kagit.jpg" />
      <img src="img/makas.jpg" />

      <p>
        Taş makası kırar. Kağıt taşı kaplar. Makas kağıdı keser.
      </p>

      <button type="button"><Link to={"/home"} className="home">bilgisayar ile oyna</Link></button>
      <button type="button"><Link to={"/twocom"} className="twocom">iki bilgisayar ile oyna</Link></button>
    </div>
  );
}

export default App;