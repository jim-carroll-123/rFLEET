'use client'

import Link from 'next/link'

import PlayCircle from '@assets/icons/play-circle.svg'
import { Button } from '@components/ui/Button'

export const BannerSection = () => (
  <section className="text-white bg-secondary">
    <div className="container block lg:grid grid-cols-5">
      <div className="col-span-3 py-[100px] lg:pt-[140px] pb-[100px]">
        <h3 className="font-bold mb-[15px] lg:mb-[20px]">
          ELEVATE YOUR LOGISTICS
          <br className="only-desktop" />
          WITH <span className="text-gradient bg-gradient-primary-to-br">rFleet.io:</span>
          <div className="text-gradient bg-gradient-primary-to-br">
            EMPOWERING SUPPLY
            <br className="only-desktop" />
            CHAIN MANAGEMENT GLOBALLY
          </div>
        </h3>
        <div className="text-gray-300 tracking-widest leading-relaxed mb-[36px] lg:mb-[48px]">
          Experience efficiency, connectivity, and growth
          <br className="only-desktop" />
          on one of the world&apos;s largest marketplace for supply chain
          <br className="only-desktop" />
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
  </section>
)
