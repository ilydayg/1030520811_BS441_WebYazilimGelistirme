import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './mod.css';
import { useState, useEffect } from "react";
import { Card, Button, Alert, CardGroup } from 'react-bootstrap';



export const Home = () => {

    var durum = ["tas", "kagit", "makas"];
    var dresim = ["img/tas.jpg", "img/kagit.jpg", "img/makas.jpg"];
    const [sec, setSec] = useState(null);
    const [oyuncudurum, setOyuncudurum] = useState(null);
    const [bsec, setBsec] = useState(null);
    const [baslat, setBaslat] = useState("Oyunu Başlatınız.");
    const [cont, setCont] = useState(false);
    const [kazanan, setKazanan] = useState("");
    const [showResults, setShowResults] = React.useState(false);
    const [num, setNum] = useState(0);
    const [bdurum, setBdurum] = useState(durum[num]);
    const [skor, setSkor] = useState(0);
    const [bskor, setBskor] = useState(0);


    useEffect(() => {
        if (showResults) {
            setBaslat("Seçim Yapınız");
            setBsec(null);
            setSec(null);
        }
        else {
            setBaslat("Oyunu Başlatınız.");
        }

    }, [showResults])

    useEffect(() => {
        if (num !== null) {
            setBdurum(durum[num]);
            if (cont) {
                setBsec(dresim[num]);
            }
        }
        setCont(true);
    }, [num])

    useEffect(() => {
        if (bdurum !== null) {
            if (oyuncudurum === "tas") {
                if (bdurum === "kagit") {
                    setKazanan("Bilgisayar");
                    setBskor((prev) => prev + 1);
                }
                else if (bdurum === "tas") {
                    setKazanan("Berabere");
                }
                else {
                    setKazanan("Oyuncu");
                    setSkor((prev) => prev + 1);
                }
            }
            else if (oyuncudurum === "kagit") {
                if (bdurum === "makas") {
                    setKazanan("Bilgisayar");
                    setBskor((prev) => prev + 1);
                }
                else if (bdurum === "kagit") {
                    setKazanan("Berabere");
                }
                else {
                    setKazanan("Oyuncu");
                    setSkor((prev) => prev + 1);
                }
            }
            else {
                if (oyuncudurum !== null) {
                    if (bdurum === "tas") {
                        setKazanan("Bilgisayar");
                        setBskor((prev) => prev + 1);
                    }
                    else if (bdurum === "makas") {
                        setKazanan("Berabere");
                    }
                    else {
                        setKazanan("Oyuncu");
                        setSkor((prev) => prev + 1);
                    }
                }

            }
        }

    }, [bdurum])

    const onClick = () => {
        if (baslat === "Oyunu Başlatınız.") {
            setShowResults(true);
            setNum(null);
            setBdurum(null);

        }

    }

    const handleClick = (secim, resim) => {
        if (showResults) {
            console.log("aaaa");
            setNum(Math.floor(Math.random() * 3));
            setOyuncudurum(secim);
            setSec(resim);
            setShowResults(false);
        }
    }


    return (
        <div className="center">
            <Alert variant="success" className='mt-4'>
                <Alert.Heading>TAŞ KAĞIT MAKAS</Alert.Heading>
            </Alert>
            <div>
                <div className="container">
                    <div className="player">
                        <div>
                            Oyuncu: {skor}
                        </div>
                        <img className="score" src={sec} />

                    </div>
                    <div className="player">

                        <div>
                            Bilgisayar: {bskor}
                        </div>
                        <img className="score" src={bsec} />
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-danger" onClick={onClick}>Oyuna başla</button>
                </div>
                <div>
                    <h5>{baslat}</h5>
                    <div>
                        <img className="buton" onClick={() => handleClick(durum[0], dresim[0])} src="img/tas.jpg" />
                        <img className="buton" onClick={() => handleClick(durum[1], dresim[1])} src="img/kagit.jpg" />
                        <img className="buton" onClick={() => handleClick(durum[2], dresim[2])} src="img/makas.jpg" />
                    </div>
                    <h5>Kazanan: {kazanan}</h5>
                </div>
            </div>
        </div>
    );
}

export default Home;