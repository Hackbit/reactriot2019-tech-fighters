import React from 'react';
import './user-entry-section.css';
import Kazuya from '../images/Kazuya.png';
import Jinnn from '../images/jin1.png';
const UserEntrySection = () => {
    return (
        <div>
            <div className="Form">
                <input type="text" placeholder="Enter Your Name"/>
                <button>PLAY NOW</button>
            </div>
            <img src={Kazuya} className="Kazuya" alt=""/>
            <img src={Jinnn} className="Jinnn" alt=""/>
        </div>
    );
};

export default UserEntrySection;