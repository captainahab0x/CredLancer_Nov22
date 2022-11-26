import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const NavLink = (props) => {
  const location = useLocation();
  var isActive = location.pathname === props.to;
  var className = isActive ? "active" : "";

  return (
    <Link className={`nav-bar ${className}`} {...props}>
      {props.children}
    </Link>
  );
};

export default NavLink;
