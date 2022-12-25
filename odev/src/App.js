import logo from './logo.svg';
import React from "react";
import './App.css';
import { Card, Button, Alert, CardGroup } from 'react-bootstrap';


import { Link } from "react-router-dom";
import { Home } from "./components/home"


export const App = () => {
  //      <Card body><img src="img/tas.jpg" /></Card>;

  return (
    <div className="App">
      <Alert variant="success" className='mt-4'>
        <Alert.Heading>TAŞ KAĞIT MAKAS</Alert.Heading>
      </Alert>
      <CardGroup className="deneme" >
        <Card body><img src="img/tas.jpg" /></Card>
        <Card body><img src="img/kagit.jpg" /></Card>
        <Card body><img src="img/makas.jpg" /></Card>
      </CardGroup>

      <h5 className='bosluk'>
        Taş makası kırar. Kağıt taşı kaplar. Makas kağıdı keser.
      </h5>

      <Button variant="outline-info"><Link to={"/home"} className="home">Oyuncu-Bilgisayar</Link></Button>{' '}
      <Button variant="outline-info"><Link to={"/twocom"} className="twocom">Oyuncu1-Oyuncu2</Link></Button>
    </div>
  );
}

export default App;