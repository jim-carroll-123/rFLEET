'use client'

import { ParallaxBanner } from 'react-scroll-parallax'

import planetEarth from '@assets/images/bg-planet-earth.jpeg'

import { CalculatorBox } from './CalculatorBox'
import { TruckAndShip } from './TruckAndShip'

export const CalculatorSection = () => {
  return (
    <section className="relative">
      <ParallaxBanner className="parallax-banner" layers={[{ image: planetEarth.src, speed: -20 }]}>
        <div className="flex flex-col justify-between flex-1 bg-gradient-secondary-fade-in-to-top relative">
          <div className="container text-white relative z-10">
            <div className="text-center mb-[42px] lg:mb-[54px]">
              <h3 className="font-bold mb-[15px] lg:mb-[40px] text-gradient bg-gradient-primary-to-r">
                FREIGHT CALCULATOR & RATE REQUEST (RFQ TOOL)
              </h3>
              <h6 className="text-gray-100">
                Request rates for Parcel, LTL, FTL, Drayage, Ocean Containers, and Air Cargo
                <br className="only-desktop" />
                from anywhere to just about everywhere.
              </h6>
            </div>
            <CalculatorBox />
          </div>
          <TruckAndShip />
        </div>
      </ParallaxBanner>
    </section>
  )
}
