import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopicSelection from './component/topic-selection';
import UserEntrySection from './component/user-entry-section';
import Game from './component/game-section';
import Instruction from './component/instruction'; 
import WinScreen from './component/win-screen';



function App() {
  return (
    <div className="App">
     {/* <Game/>  */}
     {/* <Instruction /> */}
     {/* <TopicSelection/> */}
     {/* <UserEntrySection/> */}
     <WinScreen/>
    </div>
  );
}

export default App;
