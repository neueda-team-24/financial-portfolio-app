import logo from "./logo.svg";
import "./App.css";
import Homepage from "./screens/homepage/Homepage.js";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(" +
          "https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Homepage />
    </div>
  );
}

export default App;
