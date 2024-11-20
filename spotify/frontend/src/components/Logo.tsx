import React from "react";
import { ReactDOM } from "react";
import "../assets/style/logo.css";
import logo from "../assets/images/spotify_test.png"


const Logo = () => {
    return (
        <div id="logo">
            <img src={logo} style={{"width": "300px", "height": "300px"}} />
        </div>
    )
}

export default Logo;