import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [imgLink, setImgLink] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setImgLink(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h3>Generate an image</h3>
      <input
        className="app-input"
        placeholder="Enter what you want to generate"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate an image </button>
      {imgLink.length > 0 ? <img className="result-img" src={imgLink || ""} alt="image" />: <></>}
    </div>
  );
}

export default App;
