'use client'

import Link from 'next/link'

import Discord from '@assets/icons/discord.svg'
import Instagram from '@assets/icons/instagram.svg'
import Twitter from '@assets/icons/twitter.svg'
import Youtube from '@assets/icons/youtube.svg'
import { Logo } from '@components/ui/Logo'

export default function Example() {
  return (
    <footer className="relative flex flex-col pt-[60px] pb-[100px] lg:pt-[88px] lg:pb-[144px] bg-dark text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-[120px] lg:mb-[160px]">
          <div className="flex flex-col gap-11">
            <Logo />
            <div className="flex flex-col gap-3">
              <h6>A Leading Partner for Cutting-Edge</h6>
              <h6>Innovation in the Sphere of Logistics and</h6>
              <h6>Supply Chain Management</h6>
            </div>
            <div className="flex gap-10">
              <Link href="#" className="svg-hover">
                <Discord />
              </Link>
              <Link href="#" className="svg-hover">
                <Twitter />
              </Link>
              <Link href="#" className="svg-hover">
                <Instagram />
              </Link>
              <Link href="#" className="svg-hover">
                <Youtube />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-11 mt-11 lg:mt-0">
            <h4>Links</h4>
            <div className="flex flex-col gap-5">
              <Link href="#">
                <h6>Main Screen</h6>
              </Link>
              <Link href="#">
                <h6>Ship Now</h6>
              </Link>
              <Link href="#">
                <h6>Carrier Network</h6>
              </Link>
              <Link href="#">
                <h6>About US</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          © 2023 All Rights Reserved. Eminent Global Solutions, LLC and rFleet Inc.
        </div>
      </div>
    </footer>
  )
}
