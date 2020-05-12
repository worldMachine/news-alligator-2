import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from './components/News'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimarySearchAppBar />
        <News />
      </header>
    </div>
  );
}

export default App;
