import React from "react";

export default function Input({ option, performAction, setInput, result }) {
  return (
    <div className="input">
      <h3>{option.name}</h3>
      <p>{option.description}</p>
      <textarea
        className="text-area"
        cols={60}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={performAction}>
        DO YOUR STUFF!
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
