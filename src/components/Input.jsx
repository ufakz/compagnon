import React from "react";

export default function Input({ option, performAction }) {
  return (
    <div className="input">
      <h3>{option.name}</h3>
      <p>{option.description}</p>
      <textarea className="text-area" cols={60} rows={10}></textarea>
      <button className="action-btn">DO YOUR STUFF!</button>
    </div>
  );
}
