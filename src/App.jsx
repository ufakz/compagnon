import { useState } from "react";
import Home from "./components/Home";
import Input from "./components/Input";
import { options } from "./options";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [option, setOption] = useState({});

  const selectOption = (option) => {
    setOption(option);
  };

  const performAction = () => {};

  return (
    <div className="app-main">
      {Object.values(option).length === 0 ? (
        <Home optionsList={options} selectOption={selectOption} />
      ) : (
        <Input option={option} performAction={performAction} />
      )}
    </div>
  );
}

export default App;
