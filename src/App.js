import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TopicSelection from './component/topic-selection';
// import UserEntrySection from './component/user-entry-section';
import Game from './component/game-section';
import Instruction from './component/instruction'; 
import WinScreen from './component/win-screen';


import Quiz from './component/quiz-section'
import TopicSelection from './component/topic-selection';
import UserEntrySection from './component/user-entry-section';
import HealthBar from "./component/health-bar";
import PlayerSelection from './component/select-player';

function App() {
  return (
    <div className="App">
     <Game/> 
     {/* <Instruction /> */}
     {/* <TopicSelection/> */}
     {/* <UserEntrySection/> */}
     {/* <WinScreen/> */}
      {/* <Quiz></Quiz> */}
      {/* <TopicSelection></TopicSelection> */}
      {/* <UserEntrySection></UserEntrySection> */}
      {/* <HealthBar></HealthBar> */}
      {/* <PlayerSelection></PlayerSelection> */}
    </div>
  );
}

export default App;
