import NavBar from "./components/Navbar";
import "./App.css";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Lists id="0" />
      <Lists id="1" />
      <Lists id="2" />
    </div>
  );
}

export default App;
