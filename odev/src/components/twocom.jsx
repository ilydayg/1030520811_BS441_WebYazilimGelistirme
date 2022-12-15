import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './twocom.css';
import { useState } from "react";


export const Twocom = () => {

    //const [tas, setTas] = useState("tas");
    var durum = ["tas", "kagit", "makas"];
    const [kazanan, setKazanan] = useState("");
    const [showResults, setShowResults] = React.useState(false);

    const [num, setNum] = useState(() => Math.floor(Math.random() * 3));
    const [bdurum, setBdurum] = useState(durum[num]);
    const [skor, setSkor] = useState(0);
    const [bskor, setBskor] = useState(0);



    const onClick = () => {
        setNum(Math.floor(Math.random() * 3));
        console.log(num);
        setShowResults(true);
    }

    const handleClick = (secim, showResults) => {

        if (showResults) {
            console.log(secim);
            setBdurum(durum[num]);
            console.log(bdurum);

            if (secim == "tas") {
                if (bdurum == "kagit") {
                    setKazanan("Bilgisayar");
                    setBskor((prev) => prev + 1);
                }
                else if (bdurum == "tas") {
                    setKazanan("Berabere");
                }
                else {
                    setKazanan("Oyuncu");
                    setSkor((prev) => prev + 1);
                }
            }
            setShowResults(false);
        }
    }

    return (
        <div className="center">
            <h2>Taş Kağıt Makas</h2>
            <div>
                <div className="container">
                    <div className="player">
                        <div>
                            Oyuncu: {skor}
                        </div>
                        <div className="score"></div>

                    </div>
                    <div className="player">

                        <div>
                            Bilgisayar: {bskor}
                        </div>
                        <div className="score"></div>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={onClick}>Oyuna başla</button>
                </div>
                <div>
                    <h5>Seçim Yap</h5>
                    <div>
                        <img onClick={() => handleClick(durum[0], showResults)} src="img/tas.jpg" />
                        <img onClick={() => handleClick(durum[1], showResults)} src="img/kagit.jpg" />
                        <img onClick={() => handleClick(durum[2], showResults)} src="img/makas.jpg" />
                    </div>

                    <h5>Kazanan: {kazanan}</h5>
                </div>
            </div>
        </div>
    );
}

export default Twocom;