import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Characters from './components/Characters/Characters'; 

function App() {
  return(
    <div className="content">
      <Route exact path="/" component={Characters} />
      <Route exact path="/about" component={About} />
    </div>
  )
}

export default App;
