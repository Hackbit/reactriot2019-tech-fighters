import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './component/quiz-section'
import TopicSelection from './component/topic-selection';
import UserEntrySection from './component/user-entry-section';
import HealthBar from "./component/health-bar";
import PlayerSelection from './component/select-player';
import WinScreen from './component/win-screen';
import GameSection from './component/game-section';
import Instruction from './component/instruction';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Quiz></Quiz> */}
      {/* <TopicSelection></TopicSelection> */}
      {/* <UserEntrySection></UserEntrySection> */}
      <Redirect to='/user-entry-section' />;
      {/* <HealthBar></HealthBar> */}
      {/* <WinScreen></WinScreen> */}
      {/* <GameSection></GameSection> */}
      {/* <PlayerSelection></PlayerSelection> */}
    </div>
  );
}

export default App;
