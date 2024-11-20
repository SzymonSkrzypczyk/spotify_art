import React from "react";
import { ReactDOM } from "react";
import "../assets/style/buttons.css";


const Buttons = () => {
    return (
        <div id="buttons">
            <button id="play">
                play
            </button>
            <button id="stop">
                stop
            </button>
            <button id="revert">
                revert
            </button>
            <button id="skip">
                skip
            </button>
        </div>
    )
}

export default Buttons;