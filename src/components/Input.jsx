import React from "react";

export default function Input({ option, performAction, setInput }) {
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
    </div>
  );
}
