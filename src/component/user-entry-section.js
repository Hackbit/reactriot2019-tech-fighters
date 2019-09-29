import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Instruction from './instruction';

import './user-entry-section.css';
import Kazuya from '../images/Kazuya.png';
import Jinnn from '../images/jin1.png';
const UserEntrySection = () => {
    return (
        <div>
            <div className="Form">
                <input type="text" placeholder="Enter Your Name" />
                <button><Link to="/instruction">PLAY NOW</Link></button>
            </div>
            <img src={Kazuya} className="Kazuya" alt="" />
            <img src={Jinnn} className="Jinnn" alt="" />
        </div>
    );
};

export default UserEntrySection;