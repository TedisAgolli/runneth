import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewBookmark from "./components/NewBookmark";

function App() {
  return (
    <div className="App">
      <NewBookmark></NewBookmark>
      <header className="App-header">
        <button>Folder 1</button>
        <button>Folder 2</button>
        <button>Folder 3</button>
      </header>
    </div>
  );
}

export default App;
