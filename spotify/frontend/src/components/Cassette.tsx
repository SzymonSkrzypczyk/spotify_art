import React from "react";
import { ReactDOM } from "react";
import "../assets/style/casette.css";
import rotator from "../assets/images/rotator.png";


const Casette = () => {
    return (
        <div id="casette">
            <img src={rotator} />
            <img src={rotator} />
        </div>
    )
}

export default Casette;