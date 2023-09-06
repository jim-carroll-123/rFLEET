'use client'

import Globe from 'react-globe.gl'

import placesData from './placesData.json'

export const CitiesGlobe = () => {
  const places: any = placesData
  return (
    <Globe
      width={520}
      height={520}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundColor="rgba(0,0,0,0)"
      labelsData={places}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
      labelLat={(d: any) => d.properties.latitude}
      labelLng={(d: any) => d.properties.longitude}
      labelText={(d: any) => d.properties.name}
      labelSize={(d: any) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelDotRadius={(d: any) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelResolution={2}
      enablePointerInteraction={false}
      objectRotation={{ x: 1, y: 1, z: 1 }}
    />
  )
}
