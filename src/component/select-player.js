import React from "react";
import "./select-player.css";
import damiImg from "../images/mark.png";
import paul from "../images/paul.png";
import jin from "../images/jin.png";
import kaju from "../images/Kazuya1.png";
// import SoundPlayer from "../component/SoundPlayer";

const PlayerSelection = () => {
  const [dynamicImage, changeImage] = React.useState(damiImg);

  return (
    <div>
      {/* <SoundPlayer /> */}
      <main className="main">
        <div className="container-players">
          <img className="userContent" src={dynamicImage} alt="Unknown" />
        </div>

        <div className="ChoicePlayer">
          <div></div>
          <img
            className="paulImg"
            id="selectionImg"
            src={paul}
            alt="Paul"
            onMouseOver={() => {
              changeImage(paul);
              // changeSound("../Sound/mp3.mp3");
            }}
            onMouseOut={() => changeImage(damiImg)}
          />
          <img
            className="kazuyaImg"
            id="selectionImg"
            src={kaju}
            alt="Kazuya"
            onMouseOver={() => {
              changeImage(kaju);
            }}
            onMouseOut={() => changeImage(damiImg)}
          />
          <img
            className="jinImg"
            id="selectionImg"
            src={jin}
            alt="Jin"
            onMouseOver={() => {
              changeImage(jin);
            }}
            onMouseOut={() => changeImage(damiImg)}
          />
        </div>

      </main>
      {/* <button className="SelectNext">Next</button> */}
    </div>
  );
};
export default PlayerSelection;
