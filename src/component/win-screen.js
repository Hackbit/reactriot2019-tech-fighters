// import React from "react";
import jingif from './../images/jingiff.gif';
import paulgif from './../images/paulgif.gif';
import './win-screen.css';
import React, { Component } from 'react';
class win extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
  }
  render() {
    return (
      <div>
        <div className="WinContainer">
          <h1>Congratulations</h1>
          <h2>{this.state.inputValue}</h2>
          <p>you are quiz master!!</p>
          <div className="Gif">
            <img src={jingif} />
            <img src={paulgif} />
          </div>
          <div className="WinBtn">
            <button>Main Menu</button>
            <button>Credits</button>
          </div>
        </div>
      </div>
    );
  }

  async componentWillMount() {

    const name = localStorage.getItem('name')
    await this.setState({
      inputValue: name
    });
  }
}

export default win;

// const win = () => {
//   return (
//     <div>
//       <div className="WinContainer">
//         <h1>Congratulations</h1>
//         <h2>Player</h2>
//         <p>you are quiz master!!</p>
//         <div className="Gif">
//             <img src={jingif}/>
//             <img src={paulgif}/>
//         </div>
//         <div className="WinBtn">
//           <button>Main Menu</button>
//           <button>Credits</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default win;
