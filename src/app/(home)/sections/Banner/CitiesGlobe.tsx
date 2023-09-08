'use client'

import { useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'

import placesData from './placesData.json'

// const Globe = dynamic(() => import('react-globe.gl').then((mod) => mod.default), {
//   ssr: false
// })

export const CitiesGlobe = () => {
  const globeEl = useRef<any>(null)
  const places: any = placesData

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 20, lng: -16.6, altitude: 1.7 }, 4000)
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().enabled = false
    }
  }, [])

  return (
    <Globe
      ref={globeEl}
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
      objectRotation={{ x: 50, y: 50, z: 1 }}
    />
  )
}
