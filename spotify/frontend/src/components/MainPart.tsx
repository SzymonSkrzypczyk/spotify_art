import React from "react";
import { ReactDOM } from "react";
import "../assets/style/mainPart.css";

import SongPanel from "./SongPanel";
import Logo from "./Logo";

const MainPart = () => {
    return (
        <main id="main-part">
            <SongPanel title="Every Breath You Take" author="The Police" />
            <Logo />
        </main>
    )
}

export default MainPart;