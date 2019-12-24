import React from 'react';
import Main from "./Main"
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';

const App: React.FC = (props) => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
        </header>
        <Main />
      </div>
    </Router>
  );
}

export default App;
