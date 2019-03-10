import React, { Component } from 'react'
import MapboxGl, { Marker } from "react-mapbox-gl"

import { ReactComponent as PickUpMarker } from '../../assets/pickUpMarker.svg'
import { ReactComponent as DropOffMarker } from '../../assets/dropOffMarker.svg'

import './styles.css'

const Map = MapboxGl({
  accessToken: 'pk.eyJ1IjoibWF0dGhpZXVwaW50ZSIsImEiOiJjanQyd3F5ZDIxajkxM3lwaHdpZGpoZDF1In0.Z95KtkljxyucgBCsoK-sNA'
})

const markers = {
  'pickup': PickUpMarker,
  'dropoff': DropOffMarker,
}

const ImgMarker = ({ type, latitude, longitude }) => {
  const Img = markers[type]

  return (
    <Marker
      coordinates={[longitude, latitude]}
      anchor="bottom">
      <Img />
    </Marker>
  )
}

export default class extends Component {
  render () {
    const { pickup, dropoff } = this.props

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[2.319332056, 48.859329896]}
        zoom={[14]}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <ImgMarker type="pickup" {...pickup} />
        <ImgMarker type="dropoff" {...dropoff} />
      </Map>
    )
  }
}
