import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import Navbar from './components/Navbar';
import Casette from './components/Cassette';
import Logo from './components/Logo';
import Footer from './components/Footer';
import MainPart from './components/MainPart';
import {Greet} from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <Navbar />
            <Casette />
            <MainPart />
            <Footer time="0:00" duration="2:13"/>
        </div>
    )
}

export default App
