import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
console.log("Navbar check:", Navbar)
return <div> <NavLink to="/" exact activeStyle={{
  fontWeight: "800",
  fontSize: "30px",
  color: "Hotpink",
}}>Home</NavLink>
<NavLink to="/AboutPage" activeStyle={{
  fontWeight: "800",
  fontSize: "30px",
  color: "Hotpink",
}}>About</NavLink>
<NavLink to="/Discover" activeStyle={{
  fontWeight: "800",
  fontSize: "30px",
  color: "Hotpink",
}}>Movies</NavLink>
</div>}