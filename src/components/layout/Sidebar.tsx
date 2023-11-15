'use client';

import { useEffect, useState } from 'react';



import Link from 'next/link'

import { Box } from '@components/ui/Box'
import { BoxLight } from '@components/ui/BoxLight'
import { ClipBoard } from '@components/ui/Clipboard'
import { ECommerce } from '@components/ui/E-Commerce'
import { Logo } from '@components/ui/Logo'
import { TruckLogo } from '@components/ui/TruckLogo';
import { WMS } from '@components/ui/WMS'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('')

  const handleSectionClick = (sectionId: any) => {
    setActiveSection(sectionId)
  }

  const sectionStyle = (sectionId: any) =>
    `flex items-center pl-1 p-2 rounded-lg hover:cursor-pointer ${
      activeSection === sectionId ? 'bg-[#252C65]' : 'hover:bg-[#252C65]'
    }`

  return (
    <header className="bg-[#141943] h-100">
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center p-6">
          <Logo />
        </div>

        <nav className="flex flex-col gap-6 p-8">
          <div onClick={() => handleSectionClick('dashboard')} className={sectionStyle('dashboard')}>
            <BoxLight />
            <Link href="../../internal/sections/dashboard">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Dashboard</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('newquote')} className={sectionStyle('newquote')}>
            <ClipBoard />
            <Link href="../../internal/sections/newquote">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New Quote</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('new-shipment')} className={sectionStyle('new-shipment')}>
            <TruckLogo />
            <Link href="../../internal/sections/new-shipment">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New Shipment</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('ecommerce')} className={sectionStyle('ecommerce')}>
            <ECommerce />
            <Link href="../../internal/sections/ecommerce">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">E-Commerce</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('product')} className={sectionStyle('product')}>
            <BoxLight />
            <Link href="../../internal/sections/product">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Product</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('WMS')} className={sectionStyle('WMS')}>
            <WMS />
            <Link href="../../internal/sections/WMS">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">WMS</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('address-book')} className={sectionStyle('address-book')}>
            <ClipBoard />
            <Link href="../../internal/sections/address-book">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Address Book</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('shipment-profile')} className={sectionStyle('shipment-profile')}>
            <BoxLight />
            <Link href="../../internal/sections/shipment-profile">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Shipment Profile</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('newPFQ')} className={sectionStyle('newPFQ')}>
            <ECommerce />
            <Link href="../../internal/sections/newPFQ">
              <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New PFQ/New RFB</div>
            </Link>
          </div>

          <div onClick={() => handleSectionClick('reports')} className={sectionStyle('reports')}>
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