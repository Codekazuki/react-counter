import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Greet />
      <Welcome /> */}
    </div>
  );
}

export default App;
