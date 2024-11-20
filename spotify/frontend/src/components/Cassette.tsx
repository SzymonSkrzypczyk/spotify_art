import React from "react";
import { ReactDOM } from "react";
import "../assets/style/casette.css";
import rotator from "../assets/images/rotator.png";


const Casette = () => {
    return (
        <div id="casette">
            <img src={rotator} className="image"/>
            <img src={rotator} className="image"/>
        </div>
    )
}

export default Casette;