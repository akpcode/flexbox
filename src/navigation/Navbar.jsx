import React from "react";
import "./Navbar.css"
import NavbarItems from "./NavbarItems";

function Navbar() {
    return(
        <div className="container">
        <div className="sub-container">
           <NavbarItems/>
        </div>
        </div>
    )
}
export default Navbar;