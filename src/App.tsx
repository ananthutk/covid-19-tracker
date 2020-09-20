import React from 'react';
import './App.css';
import CountryCaseStatus from './components/CountryCaseStatus/CountryCaseStatus';
import Header from './components/Header/Header';
import StateSelector from './components/StateSelector/StateSelector';

function App() {
  return (
    <div className="App">
      <Header />
      <CountryCaseStatus />
      <StateSelector/>
    </div>
  );
}

export default App;
