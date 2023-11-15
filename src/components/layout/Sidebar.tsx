'use client';

import { useEffect, useState } from 'react';



import Link from 'next/link'

import { Box } from '@components/ui/Box'
import { BoxLight } from '@components/ui/BoxLight'
import { ClipBoard } from '@components/ui/Clipboard'
import { ECommerce } from '@components/ui/E-Commerce'
import { Logo } from '@components/ui/Logo'
import { TruckLogo } from '@components/ui/TruckLogo'
import { WMS } from '@components/ui/WMS'


export default function Sidebar() {
  const navigateToSection = (sectionId: any) => {
    window.location.hash = `#${sectionId}`
  }
  return (
    <header className="bg-[#141943] h-100">
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center p-6">
          <Logo />
        </div>

        <nav className="flex flex-col gap-6 p-8">
          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <BoxLight />
            <Link href="../../internal/sections/dashboard">
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Dashboard</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <ClipBoard />
              <Link href="../../internal/sections/newquote">
                <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New Quote</div>
              </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <TruckLogo />
            <Link href="../../internal/sections/new-shipment">
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New Shipment</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <ECommerce />
            <Link href="../../internal/sections/ecommerce">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">E-Commerce</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <BoxLight />
            <Link href="../../internal/sections/product">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Product</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <WMS />
            <Link href="../../internal/sections/WMS">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">WMS</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <ClipBoard />
            <Link href="../../internal/sections/address-book">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Address Book</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <BoxLight />
            <Link href="../../internal/sections/shipment-profile">
             <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Shipment Profile</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <ECommerce />
            <Link href="../../internal/sections/newPFQ">
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New PFQ/New RFB</div>
            </Link>
          </div>

          <div className="flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer hover:bg-[#252C65]">
            <ClipBoard />
            <Link href="../../internal/sections/reports">
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Reports</div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}