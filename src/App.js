import { useState, useEffect } from "react";
import "./App.css";
import BoligmappaAuth from "./components/BoligmappaAuth";
import BoligmappaConnect from "./components/BoligmappaConnect";
import BoligmappaMenu from "./components/BoligmappaMenu";
import BoligmappaSearch from "./components/BoligmappaSearch";

function App() {
  const [selectedBoligmappaNumbers, setSelectedBoligmappaNumbers] = useState(
    []
  );

  useEffect(() => {
    const onLoginResult = (e) => {
      console.log(e);
    };
    window.addEventListener("bm-login-success", onLoginResult);
    window.addEventListener("bm-login-failed", onLoginResult);

    return () => {
      window.removeEventListener("bm-login-success", onLoginResult);
      window.removeEventListener("bm-login-failed", onLoginResult);
    };
  }, []);

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
