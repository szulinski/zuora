import React from 'react';
import '../css/Zuora.css';
import Navbar from "./Navbar.js";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function Zuora() {
    return (
        <div class = "Zuora">
            <Navbar />
            <div className = "zuora_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default Zuora