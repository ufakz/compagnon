import React from "react";
import { RequestType } from "../options";
import { ReactComponent as Loader } from "../assets/icons/loader.svg";

export default function Input({
  option,
  performAction,
  setInput,
  result,
  imgLink,
  goBack,
  loading,
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
            {!loading ? "DO YOUR STUFF!" : <Loader className="spinner" />}
          </button>
          {imgLink.length > 0 ? (
            <img className="img-result" src={imgLink || ""} alt="image" />
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
            {!loading ? "DO YOUR STUFF!" : <Loader className="spinner" />}
          </button>
          <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
      )}
    </div>
  );
}
