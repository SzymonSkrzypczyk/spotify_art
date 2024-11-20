import React from "react";
import { ReactDOM } from "react";
import "../assets/style/navbar.css";
import Buttons from "./Buttons";
import Volume from "./Volume";


const Navbar = () => {
    return (
        <div id="navbar">
            <Buttons />
            <Volume />
        </div>
    )
}

export default Navbar;