'use client'

import Image from 'next/image'
import Link from 'next/link'

import PlayCircle from '@assets/icons/play-circle.svg'
import airplane from '@assets/images/airplane.png'
import bgEarth from '@assets/images/bg-earth.jpeg'
import { Button } from '@components/ui/Button'
import { getImageUrl } from '@lib/utils'

import { Search } from './Search'

export default function Home() {
  return (
    <main
      className={`relative bg-fixed bg-center bg-cover`}
      style={{ backgroundImage: `url('${getImageUrl(bgEarth)}')` }}
    >
      <section className="text-white">
        <div className="bg-secondary">
          <div className="container block lg:grid grid-cols-5">
            <div className="col-span-3 py-[100px] lg:py-[140px]">
              <h3 className="font-bold mb-[15px] lg:mb-[20px]">
                ELEVATE YOUR LOGISTICS
                <br />
                WITH <span className="text-gradient bg-gradient-primary-to-br">rFleet.io:</span>
                <div className="text-gradient bg-gradient-primary-to-br">
                  EMPOWERING SUPPLY
                  <br />
                  CHAIN MANAGEMENT GLOBALLY
                </div>
              </h3>
              <div className="text-gray-300 tracking-widest leading-relaxed mb-[36px] lg:mb-[48px]">
                Experience efficiency, connectivity, and growth
                <br />
                on one of the world&apos;s largest marketplace for supply chain
                <br />
                management software.{' '}
              </div>
              <div className="flex items-center gap-6">
                <Link href="#">
                  <Button glossy size="xl">
                    CONTACT US
                  </Button>
                </Link>
                <Link href="#" className="flex items-center gap-2">
                  <PlayCircle />
                  <h6 className="only-desktop">HOW IT WORKS</h6>
                </Link>
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
        <div className="h-[100px] bg-gradient-fade-bottom-secondary" />
      </section>
      <section className="py-[60px] lg:py-[80px]">
        <div className="container flex flex-col items-center text-center gap-[42px] lg:gap-[56px]">
          <div>
            <h3 className="font-bold mb-[15px] lg:mb-[20px] text-gradient bg-gradient-primary-to-r">
              SEARCH ENGINE & OPTIMIZATION
            </h3>
            <h6 className="text-gray-300 font-[500]">What do you want to look for today?</h6>
          </div>
          <div className="w-full flex flex-col items-center">
            <Search />
            <div className="text-white">
              Tip: ask me any questions or tasks relating to transportation and logistics
            </div>
          </div>
          <div className="flex flex-col gap-[15px] items-center">
            <div className="relative px-[12px] py-[8px] lg:px-[16px] lg:py-[10px] bg-opacity-bubble">
              Quote 2 pallets from Cleveland, OH to Los Angeles, CA?
            </div>
            <div className="relative px-[12px] py-[8px] lg:px-[16px] lg:py-[10px] bg-opacity-bubble">
              How long is the estimated transit time from Atlanta, GA to Seattle, WA?
            </div>
            <div className="relative px-[12px] py-[8px] lg:px-[16px] lg:py-[10px] bg-opacity-bubble">
              Take me to my dashboard.&quot;, or &quot;New Quote&quot;
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <div className="h-[100px] bg-gradient-fade-top-secondary" />
        <div className="bg-secondary">
          <div className="mb-[36px] lg:mb-[50px] pl-[60px]">
            <Image src={airplane} alt="" />
          </div>
          <div className="container">
            <div className="text-center">
              <h3 className="font-bold mb-[15px] lg:mb-[40px] text-gradient bg-gradient-primary-to-r">
                FREIGHT CALCULATOR & RATE REQUEST (RFQ TOOL)
              </h3>
              <h6 className="text-gray-100">
                Request rates for Parcel, LTL, FTL, Drayage, Ocean Containers, and Air Cargo
                <br />
                from anywhere to just about everywhere.
              </h6>
            </div>
          </div>
        </div>
        <div className="h-[100px] bg-gradient-fade-bottom-secondary" />
        <div className="container">
          <div className="bg-[linear-gradient(117deg,#1C194B,0.9%,rgba(47,128,237,0.20)100%)] border border-solid border-[#ffffff30] p-[26px] lg:p-[36px] rounded-[20px]">
            kkk
            <br />
            kkk
            <br />
            kkk
            <br />
            kkk
            <br />
          </div>
        </div>
      </section>
    </main>
  )
}
