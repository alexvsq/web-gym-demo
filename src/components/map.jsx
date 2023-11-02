import React from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
  return (
    <Map height={300} defaultCenter={[-12.109074, -76.9752845]} defaultZoom={17}>
      <Marker width={50} anchor={[-12.109074, -76.9752845]} />
    </Map>
  )
}