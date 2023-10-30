import React from 'react'
import { Annotation, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

import { geoCentroid } from 'd3-geo'

import allStates from '@json/usaStates.json'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
}

const StatesMap = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography key={geo.rsmKey} stroke="#FFF" opacity={0.7} geography={geo} fill="#6463b4ad" />
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  )
}

export default StatesMap
