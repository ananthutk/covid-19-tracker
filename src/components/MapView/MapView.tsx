import React, { Component, useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { switchStates } from './SwitchStates'
// import '../../../node_modules/leaflet/dist/leaflet.css'
// import 'leaflet/dist/leaflet.css'

export interface IProps {
  filteredData: any;
  pieConfirmedTotal: any;
  pieActive: any;
  pieRecovered: any;
  pieDeaths: any;
}

function MapView({ filteredData, pieConfirmedTotal, pieActive, pieRecovered, pieDeaths }: IProps) {

  const [currentPlace, setCurrentPlace] = useState('India')
  const [lat, setLat] = useState(20.5937)
  const [lng, setLng] = useState(78.9629)
  const [zoom, setZoom] = useState(13)
  const [totalConfirmed, setTotalConfirmed] = useState()
  const [active, setActive] = useState()
  const [recovered, setRecovered] = useState()
  const [deaths, setDeaths] = useState()

  useEffect(() => {
    console.log('map Data ', filteredData)
    console.log('data length', filteredData.length)

    if (filteredData.length > 1) {
      setLat(20.5937)
      setLng(78.9629)
      setTotalConfirmed(pieConfirmedTotal)
      setActive(pieActive)
      setRecovered(pieRecovered)
      setDeaths(pieDeaths)
    } else {
      Object.values(filteredData).map((item: any) => {
        console.log('map state', item.state)
        setTotalConfirmed(item.confirmed)
        setActive(item.active)
        setRecovered(item.confirmed)
        setDeaths(item.deaths)
        setCurrentPlace(item.state)
        switchStates(item.state, setLat, setLng)
      })
    }



  })


  const position: [number, number] = [lat, lng]
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {currentPlace}<br />total confirmed -{totalConfirmed} <br /> active -{active}<br /> recovered -{recovered}<br /> deaths -{deaths}
        </Popup>
      </Marker>
    </Map>
  )

}
export default MapView;
