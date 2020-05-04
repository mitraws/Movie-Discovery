import React from "react";
import { NavLink } from "react-router-dom";
import Sparkle from "react-sparkle";

const style = {
  padding: "5px 5px 5px 5px",
  position: "relative",
};

const activeStyle = {
  fontWeight: "800",
  fontSize: "30px",
  color: "white",
  background: "black",
};

export default function NavItem(props) {
  const to = props.to;
  const exact = props.exact;

  return (
    <NavLink style={style} exact={exact} to={to} activeStyle={activeStyle}>
      {props.children} 
    </NavLink>
  );
}
