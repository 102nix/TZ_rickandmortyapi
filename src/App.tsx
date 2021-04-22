import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import { About } from './components/About/About'
import { Character } from './components/Character/Character'
import { Characters } from './components/Characters/Characters'
import { Navbar } from './components/Navbar/Navbar'
import { Tech } from './components/Tech/Tech'

function App() {
  return(
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route path="/character" component={Character} />
        <Route path="/about" component={About} />
        <Route path="/tech" component={Tech} />
      </Switch>
    </div>
  )
}

export default App;
