import React from "react";
import { RequestType } from "../options";

export default function Input({
  option,
  performAction,
  setInput,
  result,
  goBack,
}) {
  return (
    <div>
      <button className="action-btn back-btn" onClick={goBack}>
        &#8592; Go Back
      </button>
      {option.type == RequestType.IMAGE ? (
        <div className="input">
          <h3>{option.name}</h3>
          <p>{option.description}</p>
          <input
            className="img-input"
            placeholder="Enter what you want to generate"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="action-btn" onClick={performAction}>
            DO YOUR STUFF!
          </button>
          {result.length > 0 ? (
            <img className="img-result" src={result || ""} alt="image" />
          ) : (
            <></>
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
}
