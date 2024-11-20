import React from "react";
import { ReactDOM } from "react";
import "../assets/style/songPanel.css";

interface SongPanelProps {
    title: string;
    author: string; 
}

const SongPanel: React.FC<SongPanelProps> = ({title, author}) => {
    return (
        <div id="song-panel">
            <h2 id="song-title">{title}</h2>
            <h4 id="song-author">{author}</h4>
        </div>
    )
}

export default SongPanel;