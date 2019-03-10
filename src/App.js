import { isEmpty, debounce } from 'lodash'
import api from './api'

import React, { Component } from 'react'

import Map from './components/Map'
import JobBox from './components/JobBox'
import Toaster from './components/Toaster'

import './App.css'

const initialState = {
  pickup: {
    address: '',
    latitude: null,
    longitude: null,
    status: 'blank',
  },
  dropoff: {
    address: '',
    latitude: null,
    longitude: null,
    status: 'blank',
  },
  created: false,
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { ...initialState }

    this.geocode = debounce(this.geocode, 500)
  }

  resetState() {
    this.setState({ ...initialState })
  }

  geocode(field, address) {
    api.geocode({ address })
      .then(res => this.onPresent(field, res))
      .catch(err => this.onError(field))
  }

  handleChange(field, address) {
    const value = this.state[field]

    if (isEmpty(address)) return this.setState({ [field]: { ...value, status: 'blank' }})

    this.setState({ [field]: { ...value, address } })
    this.geocode(field, address)
  }

  handleCreate() {
    const { pickup, dropoff } = this.state

    this.setState({ creating: true })
    api.createJob({
      pickup: pickup.address,
      dropoff: dropoff.address
    })
      .then(res => this.onCreated())
      .finally(() => this.setState({ creating: false }))
  }

  onPresent(field, value) {
    this.setState({ [field]: {...value, status: 'present'} })
  }

  onError(field) {
    const value = this.state[field]
    this.setState({ [field]: {
      ...value,
      latitude: null,
      longitude: null,
      status: 'error'
    }})
  }

  onCreated() {
    this.setState({ created: true }, () =>
      setTimeout(() => this.resetState(), 5000)
    )
  }

  render() {
    const { pickup, dropoff, creating, created } = this.state

    return (
      <div className="App">
        <Map pickup={pickup} dropoff={dropoff} />
        <JobBox
          pickup={pickup}
          dropoff={dropoff}
          disabled={!pickup.longitude || !dropoff.longitude || creating}
          onFieldChange={(field, value) => this.handleChange(field, value)}
          onCreate={() => this.handleCreate()}
        />
        {created && <Toaster text="Job has been created successfully!" />}
      </div>
    )
  }
}

export default App
