import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './mod.css';
import { useState, useEffect } from "react";
import { Card, Button, Alert, CardGroup } from 'react-bootstrap';



export const Twocom = () => {

    var durum = ["tas", "kagit", "makas"];
    var dresim = ["img/tas.jpg", "img/kagit.jpg", "img/makas.jpg"];
    const [oyuncu, setOyuncu] = useState("Oyuncu1");
    const [oyuncucont, setOyuncucont] = useState(false);
    const [oyunbitti, setOyunbitti] = useState("bbb");
    const [sec, setSec] = useState(null);
    const [oyuncudurum, setOyuncudurum] = useState(null);
    const [bsec, setBsec] = useState(null);
    const [baslat, setBaslat] = useState("Oyunu Başlatınız.");
    const [gres1, setGres1] = useState(null);
    const [gres2, setGres2] = useState(null);
    const [kazanan, setKazanan] = useState("");
    const [showResults, setShowResults] = React.useState(false);
    const [oyuncu2durum, setOyuncu2durum] = useState(null);
    const [skor, setSkor] = useState(0);
    const [bskor, setBskor] = useState(0);


    useEffect(() => {
        if (showResults) {
            if (oyuncucont) {
                setBaslat("2. Oyuncu Seçim Yapabilir.");
                setOyuncu("Oyuncu2");
            }
            else {
                setBaslat("1. Oyuncu Seçim Yapabilir.");
                setSec(null);
                setBsec(null);
            }
        }
        else {
            setBaslat("Oyunu Başlatınız.");
            setOyuncu("Oyuncu1");
            setOyuncucont(false);

        }

    }, [showResults, oyuncucont])

    useEffect(() => {
        setShowResults(false);
        console.log(oyuncudurum);
        console.log(oyuncu2durum);
        setSec(gres1);
        setBsec(gres2);

        if (oyuncudurum === "tas") {
            if (oyuncu2durum === "kagit") {
                setKazanan("Oyuncu2");
                setBskor((prev) => prev + 1);
            }
            else if (oyuncu2durum === "tas") {
                setKazanan("Berabere");
            }
            else {
                setKazanan("Oyuncu1");
                setSkor((prev) => prev + 1);
            }
        }
        else if (oyuncudurum === "kagit") {
            if (oyuncu2durum === "makas") {
                setKazanan("Oyuncu2");
                setBskor((prev) => prev + 1);
            }
            else if (oyuncu2durum === "kagit") {
                setKazanan("Berabere");
            }
            else {
                setKazanan("Oyuncu1");
                setSkor((prev) => prev + 1);
            }
        }
        else {
            if (oyuncudurum !== null) {
                if (oyuncu2durum === "tas") {
                    setKazanan("Oyuncu2");
                    setBskor((prev) => prev + 1);
                }
                else if (oyuncu2durum === "makas") {
                    setKazanan("Berabere");
                }
                else {
                    setKazanan("Oyuncu1");
                    setSkor((prev) => prev + 1);
                }
            }

        }


    }, [oyunbitti])

    const onClick = () => {
        setShowResults(true);
    }

    const handleClick = (secim, resim) => {
        if (showResults) {
            if (oyuncu === "Oyuncu1") {
                setOyuncucont(true);
                setOyuncudurum(secim);
                setGres1(resim);

            }
            else {
                setOyuncu2durum(secim);
                setGres2(resim);


                if (oyunbitti === "bbb") {
                    setOyunbitti("aaa");
                }
                else {
                    setOyunbitti("bbb");
                }
            }

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
                            Oyuncu1: {skor}
                        </div>
                        <img className="score" src={sec} />

                    </div>

                    <div className="player">

                        <div>
                            Oyuncu2: {bskor}
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

export default Twocom;