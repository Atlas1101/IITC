import { useState } from "react";
import FormComp from "./components/FormComp.jsx";
import ResultComp from "./components/ResultComp.jsx";
import FirstContent from "./components/FirstContent.jsx";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);

  return (
    <div className="App">
      <FirstContent />
      Choose a number
      {/* {didUserSubmit ? ( */}
      <ResultComp userChoice={userChoice} />
      {/* ) : ( */}
      <FormComp
        updateFunction={setUserChoice}
        setDidUserSubmit={setDidUserSubmit}
      />
      {/* )} */}
    </div>
  );
}

export default App;
