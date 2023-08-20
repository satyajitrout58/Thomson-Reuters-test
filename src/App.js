import React, { useContext, useEffect } from "react";
import { OlympicContextProvider } from "./context/OlympicContext";
import MedalWraper from "./components/MedalWraper";
import "./styles.css";

function App() {
  return (
    <OlympicContextProvider>
      <div className="App">
        <MedalWraper />
      </div>
    </OlympicContextProvider>
  );
}

export default React.memo(App);
