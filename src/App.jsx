import { useState } from "react";
import Home from "./components/Home";
import { options } from "./options";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const selectOption = (option) => {
    console.log(option);
  };

  return (
    <div className="app-main">
      <Home optionsList={options} selectOption={selectOption} />
    </div>
  );
}

export default App;
