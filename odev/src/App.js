import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Taş Kağıt Makas</h1>
      <img src="img/tas.jpg" />
      <img src="img/kagıt.jpg" />
      <img src="img/makas.jpg" />

      <p>
        Taş-kâğıt-makas, genellikle iki oyuncuyla ve üç durumdan birinin seçilmesiyle oynanan bir el oyunudur. Taş makası,
        makas kağıdı, kâğıt da taşı yener. Eğer oyuncular aynı durumu seçerse oyun berabere biter. Kullanım alanları
        yazı-tura, çöp çekme gibi oyunların yerine seçilebilir.
      </p>

      <button type="button">Oyuna Başla</button>

    </div>
  );
}

export default App;