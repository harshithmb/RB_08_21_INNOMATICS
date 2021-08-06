import React from "react";

const Card = (obj) => {
  //{login, ava...} // props
  return (
    <div className="m-2 p-2">
      <h1>{obj.login}</h1>
      <img src={obj.avatar} />
    </div>
  );
};

export default Card;
