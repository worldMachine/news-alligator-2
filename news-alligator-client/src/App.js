import React from "react";
import logo from "./logo.svg";
import "./App.css";
import News from "./components/News";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import Navigation from "./components/Navigation";
import NewsArticle from "./components/NewsArticle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <News />
      </header>
    </div>
  );
}

export default App;
