import "./App.css";
import BoligmappaAuth from "./components/BoligmappaAuth";
import BoligmappaConnect from "./components/BoligmappaConnect";
import BoligmappaMenu from "./components/BoligmappaMenu";
import BoligmappaSearch from "./components/BoligmappaSearch";

function App() {
  return (
    <div className="App">
      <BoligmappaAuth />
      <div className="App-header">
        <BoligmappaConnect />
        <BoligmappaMenu />
      </div>
      <BoligmappaSearch />
    </div>
  );
}

export default App;
