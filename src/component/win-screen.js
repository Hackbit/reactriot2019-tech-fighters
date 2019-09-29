import React from "react";
import jingif from './../images/jingiff.gif';
import paulgif from './../images/paulgif.gif';
import './win-screen.css';
const win = () => {
  return (
    <div>
      <div className="WinContainer">
        <h1>Congratulations</h1>
        <h2>Player</h2>
        <p>you are quiz master!!</p>
        <div className="Gif">
            <img src={jingif}/>
            <img src={paulgif}/>
        </div>
        <div className="WinBtn">
          <button>Main Menu</button>
          <button>Credits</button>
        </div>
      </div>
    </div>
  );
};

export default win;
