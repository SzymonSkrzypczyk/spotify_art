import React from "react";
import { ReactDOM } from "react";
import "../assets/style/footer.css";

interface FooterProps {
    time: string;
    duration: string; 
}

const Footer: React.FC<FooterProps> = ({time, duration}) => {
    return (
        <footer id="footer">
            <h5 id="time">{time}</h5>
            <h5 id="duration">{duration}</h5>
        </footer>
    )
}

export default Footer;