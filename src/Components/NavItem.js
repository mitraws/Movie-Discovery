import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  padding: "5px 5px 5px 5px",
};

const activeStyle = {
  fontWeight: "800",
  fontSize: "30px",
  color: "white",
  background: "black"
};

export default function NavItem(props) {
  const to = props.to;
  const exact = props.exact;

  return (
    <div style={style}>
      <NavLink exact={exact} to={to} activeStyle={activeStyle}>
        {props.children}
      </NavLink>
    </div>
  );
}
