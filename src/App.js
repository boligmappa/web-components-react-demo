import { useState } from "react";
import "./App.css";
import BoligmappaAuth from "./components/BoligmappaAuth";
import BoligmappaConnect from "./components/BoligmappaConnect";
import BoligmappaMenu from "./components/BoligmappaMenu";
import BoligmappaSearch from "./components/BoligmappaSearch";

function App() {
  const [selectedBoligmappaNumbers, setSelectedBoligmappaNumbers] = useState(
    []
  );
  return (
    <div className="App">
      <BoligmappaAuth />
      <div className="App-header">
        <BoligmappaConnect />
        <BoligmappaMenu />
      </div>
      <BoligmappaSearch onPropertiesSelected={setSelectedBoligmappaNumbers} />

      {selectedBoligmappaNumbers.length > 0 && (
        <>
          <p>Valgte boliger:</p>
          <ul>
            {selectedBoligmappaNumbers.map((boligmappaNumber) => (
              <li key={boligmappaNumber}>{boligmappaNumber}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
