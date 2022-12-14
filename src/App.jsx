import Buttons from "./components/Buttons";
import github from "./assets/github.png"
import telegram from "./assets/telegram.png"

function App() {
  return (
    <div className="App">
      <div className="left-side">
        <div>
          <h2>Colors</h2>
          <p>Yellow: #ffc300</p>
          <p>Red: #941b0c</p>
          <p>Green: #23856d</p>
          <p>Blue: #274c77</p>
          <h2>Sizes</h2>
          <p>xl: 18px</p>
          <p>2xl: 25px</p>
          <p>3xl: 30px</p>
          <p>4xl: 40px</p>
        </div>
        <div className="contacts">
          <a target="_blank" href="https://github.com/KomilovTemur/"><img src={github} alt="github" /></a>
          <a target="_blank" href="https://t.me/tim_coder"><img src={telegram} alt="telegram" /></a>
        </div>
      </div>
      <div className="main-side">
        <Buttons text={"Yellow xl"} bg={"yellow"} size={"xl"} />
        <Buttons text={"Red 2xl"} bg={"red"} size={"2xl"} />
        <Buttons text={"Green 3xl"} bg={"green"} size={"3xl"} />
        <Buttons text={"Blue 4xl"} bg={"blue"} size={"4xl"} />
      </div>
    </div>
  );
}

export default App;
