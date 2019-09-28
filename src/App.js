import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopicSelection from './component/topic-selection';
import UserEntrySection from './component/user-entry-section';

function App() {
  return (
    <div className="App">
      {/* <TopicSelection></TopicSelection> */}
      <UserEntrySection></UserEntrySection>
    </div>
  );
}

export default App;
