import hinata from "/hinata_2.png";
import sound from "/sound.mp3";
import "./App.css";

function App() {
  return (
    <>
      <audio controls>
        <source src={sound} type="audio/mpeg" />
      </audio>
      <main>
        <img
          src={hinata}
          alt="React Logo"
          style={{ width: 150, objectFit: "contain" }}
        />
        <aside>
          <span className="header">
            Kredi kartı bilgilerini <br /> g-görmeme izin v-verir misin?
          </span>
          <br />
          <span>kredi kartındaki numarayı yazar mısın :3</span>
          <input type="text" value={"___·___·___·___"} />
          <span>Süresi ne zaman bitiyor owo</span>
          <div>
            <input type="text" value={""} style={{ width: 50 }} />{" "}
            <span>MM/YY</span>
          </div>
          <br />
          <span>
            arkadaki numaralar... ne <br />
            yazıyo ? okuyamıyorum :(
          </span>
          <input type="text" value={""} style={{ width: 50 }} />
          <br />
          <button>arigatou senpai!</button>
        </aside>
      </main>
    </>
  );
}

export default App;
