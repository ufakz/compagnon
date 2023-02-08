import { useState } from "react";
import Home from "./components/Home";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  return (
    <div className="app-main">
      <Home />
    </div>
  );
}

export default App;
