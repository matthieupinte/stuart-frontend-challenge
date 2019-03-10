import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import './styles.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhpZXVwaW50ZSIsImEiOiJjanQyd3F5ZDIxajkxM3lwaHdpZGpoZDF1In0.Z95KtkljxyucgBCsoK-sNA'

export default class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [2.319332056, 48.859329896],
      zoom: 14,
    })

    this.map.addControl(new mapboxgl.FullscreenControl())
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render () {
    return <div className="map-container" ref={el => this.container = el} />
  }
}
