// import React from "react";
import { useLocation } from "react-router-dom";

function NavbarController({ allowedPaths, children }) {
  const location = useLocation();
  const showNavbar = !allowedPaths.includes(location.pathname);

  return showNavbar ? children : null;
}

export default NavbarController;
