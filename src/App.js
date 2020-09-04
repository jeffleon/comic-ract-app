import React from 'react';
import Main from "./components/MainComponent"
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
      {console.log(process.env.REACT_APP_KEY)}
    </BrowserRouter>
  );
}

export default App;
