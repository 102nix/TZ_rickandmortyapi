import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import About from './components/About/About'
import Characters from './components/Characters/Characters'

function App() {
  return(
    <div className="content">
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default App;
