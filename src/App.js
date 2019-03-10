import React, { Component } from 'react'

import Map from './components/Map'
import SearchBox from './components/SearchBox'
import Toaster from './components/Toaster'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pickup: null,
      dropoff: null,
    }
  }

  onPresent(field, value) {
    this.setState({
      [field]: {...value}
    })
  }

  onError(field) {
    this.setState({ [field]: null })
  }

  render() {
    const { pickup, dropoff } = this.state

    return (
      <div className="App">
        <Map pickup={pickup} dropoff={dropoff} />
        <SearchBox
          canCreateJob={pickup && dropoff}
          onPresent={(field, value) => this.onPresent(field, value)}
          onError={field => this.onError(field)}
        />
        <Toaster text="Job as been created successfully!" />
      </div>
    )
  }
}

export default App
