import React, { useState } from "react";
import { ReactDOM } from "react";

import "../assets/style/volume.css";


const Volume = () => {
    const [voice, setVoice] = useState(1);
    const range = (a: number,b: number) => Array(Math.abs(a-b)+1).fill(a).map((v,i)=>v+i*(a>b?-1:1));
    const bars = range(1, 100).map((number) => (
        <div className="bar" style={{ height: `${number}px` }} key={number} onClick={() => setVoice(number)}></div>
    ));

    return <div id="volume">
        <div id="bars">
            {bars}
        </div>
        <h3 id="volume-label">VOL</h3>
        </div>;
}

export default Volume;