import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {

    const handleClick = () => {
        console.log("aaa");
    }




    return (
        <div>
            <h2>Taş Kağıt Makas</h2>
            <div>
            </div>
            <div>
                Oyuncu: 0
                Bilgisayar: 0
            </div>
            <div>
                <img onClick={() => handleClick()} src="img/tas.jpg"></img>
                <img src="img/kagit.jpg" />
                <img src="img/makas.jpg" />
            </div>
            <h3>Kazanan: Oyuncu</h3>
        </div>
    );
}

export default Home;