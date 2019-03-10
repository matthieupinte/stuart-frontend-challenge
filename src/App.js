import React, { Component } from 'react'

import Map from './components/Map'
import SearchBox from './components/SearchBox'
import Toaster from './components/Toaster'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <SearchBox />
        <Toaster text="Job as been created successfully!" />
      </div>
    )
  }
}

export default App
