import React from "react";

export default function Home({ optionsList, selectOption }) {
  return (
    <>
      <h1>Compagnon</h1>
      <h3>Your personal A.I companion</h3>
      <div className="grid-main">
        {optionsList.map((option) => {
          return (
            <div
              key={option.id}
              className="grid-child"
              onClick={() => selectOption(option.options)}
            >
              <h3>{option.name}</h3>
              <p>{option.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
