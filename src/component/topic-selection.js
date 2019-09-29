import React, { Component } from 'react';
import "./topic-selection.css"
import Animate from "../images/jin.png";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
class TopicSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToQuestion(name) {
        localStorage.setItem('type', name);
        this.props.history.push('/game-section')
    }

    render() {
        return (
            <div className="Container">
                <div className="Box">
                </div>
                <div className="Content">
                    <h1>Select Topic</h1>
                    <button className="Btn1" onClick={(e) => { this.goToQuestion('iq'); }}>IQ</button>
                    <button className="Btn2" onClick={(e) => { this.goToQuestion('html'); }}>Html</button>
                    <button className="Btn3" onClick={(e) => { this.goToQuestion('sport'); }}>Sports</button>
                    <button className="Btn4" onClick={(e) => { this.goToQuestion('gk'); }}>G.Knowledge</button>
                </div>
                <img className="animate" src={Animate} alt="" />
            </div>
        );
    }
}

export default TopicSelection;
