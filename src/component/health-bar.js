import React, { Component } from "react";
import PropTypes from "prop-types";
import "./health-bar.css";
import Ken from "../images/ken.jpg";
import Terry from "../images/terry.jpg";

class HealthBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <div className="myside">
            <div className="playerOne">
              <img className="userImg" src={Ken} alt="ken" />
            </div>

            <div className="intro">
              <div className="border-styleLeft">
                <div className="myPlayLifeLeft">
                  <div className="lifeGreen1"></div>
                </div>
              </div>
              <div className="names">KEN</div>
            </div>
          </div>

          <div className="defenderSide">
            <div className="intro">
              <div className="border-styleRight">
                <div className="myPlayLifeRight">
                  <div className="lifeGreen2"></div>
                </div>
              </div>
              <div className="names">TERRY</div>
            </div>
            <div className="playerTwo">
              <img className="userImg" src={Terry} alt="ken" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

HealthBar.propTypes = {};

export default HealthBar;
