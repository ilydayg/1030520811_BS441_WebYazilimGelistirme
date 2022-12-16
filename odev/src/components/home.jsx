import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './twocom.css';
import { useState, useEffect } from "react";


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
            setBaslat("Seçim Yapnız");
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
            console.log(num);
            console.log(bdurum);
            console.log(bsec);
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
        setShowResults(true);
        setNum(null);
        setBdurum(null);
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
            <h2>Taş Kağıt Makas</h2>
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
                    <button type="button" onClick={onClick}>Oyuna başla</button>
                </div>
                <div>
                    <h5>{baslat}</h5>
                    <div>
                        <img onClick={() => handleClick(durum[0], dresim[0])} src="img/tas.jpg" />
                        <img onClick={() => handleClick(durum[1], dresim[1])} src="img/kagit.jpg" />
                        <img onClick={() => handleClick(durum[2], dresim[2])} src="img/makas.jpg" />
                    </div>
                    <h5>Kazanan: {kazanan}</h5>
                </div>
            </div>
        </div>
    );
}

export default Home;