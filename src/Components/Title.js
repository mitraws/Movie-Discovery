import React from "react";

const style = {
  color: "tomato",
};

export default (props) => {
  const children = props.children;

  return (
    <div>
      <h1 style={style}>{children}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.body}</p>
    </div>
  );
};
