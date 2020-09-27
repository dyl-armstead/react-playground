import React, { Component } from 'react';
import './Messages.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs'
import Accordian from './state-drills/Accordian'

function App() {
  return (
    <div><Bomb/></div>
  )
}

export default App