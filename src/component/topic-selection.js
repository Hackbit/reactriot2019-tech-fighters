import React from 'react';
import "./topic-selection.css"
import Animate from "../images/jin.png";

const TopicSelection = () => {
    return (
        <div className="Container">
            <div className="Box">                
            </div>
            <div className="Content">
                <h1>Select Topic</h1>
                <button className="Btn1">HTML</button>
                <button className="Btn2">CSS</button>
                <button className="Btn3">JAVASCRIPT</button>
                <button className="Btn4">React</button>
            </div>
            <img className="animate" src={Animate} alt=""/>
        </div>
    );
};

export default TopicSelection;