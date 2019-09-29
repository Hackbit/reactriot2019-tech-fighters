import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Instruction from './instruction';
import './user-entry-section.css';
import Kazuya from '../images/Kazuya.png';
import Jinnn from '../images/jin1.png';
class UserEntrySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    render() {
        return (
            <div>
                <div className="Form">
                    <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} placeholder="Enter Your Name" />
                    <button><Link to="/instruction">PLAY NOW</Link></button>
                </div>
                <img src={Kazuya} className="Kazuya" alt="" />
                <img src={Jinnn} className="Jinnn" alt="" />
            </div>
        );
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
        console.log("farrukh", this.state.inputValue);
        localStorage.setItem('name', this.state.inputValue)
    }
}

// export default ;
// const UserEntrySection = () => {
//     return (
//         <div>
//             <div className="Form">
//                 <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} placeholder="Enter Your Name" />
//                 <button><Link to="/instruction">PLAY NOW</Link></button>
//             </div>
//             <img src={Kazuya} className="Kazuya" alt="" />
//             <img src={Jinnn} className="Jinnn" alt="" />
//         </div>
//     );
// };

export default UserEntrySection;