import React from "react";

const Card = ({ scores }) => {
  let country = scores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
  return (
    <div>
      <div className="high-score">
        <h1>High Score per country</h1>
        {country.map(({ name, scores }, x) => {
          return (
            <div key={x}>
              <h1>High Score: {name}</h1>
              <ul>
                {scores.map((person, index) => {
                  return <li key={index}>{`${person.n.toUpperCase()}  ${person.s} `}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
