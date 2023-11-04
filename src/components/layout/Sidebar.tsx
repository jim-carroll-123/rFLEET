'use client';

import { useEffect, useState } from 'react';



import Link from 'next/link'

import { Box } from '@components/ui/Box'
import { BoxLight } from '@components/ui/BoxLight'
import { ClipBoard } from '@components/ui/Clipboard'
import { ECommerce } from '@components/ui/E-Commerce'
import { Logo } from '@components/ui/Logo'
import { TruckLogo } from '@components/ui/TruckLogo'


export default function Sidebar() {
  return (
    <header className="bg-[#252C65]">
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center p-6">
          <Logo />
        </div>

        <nav className="flex flex-col gap-6 p-8">
          <div className="flex items-center">
            <BoxLight />
            <div className="text-[#FFFFFF80] text-base font-medium leading-5 ml-4 font-poppins">Dashboard</div>
          </div>

          <div className="flex items-center">
            <ClipBoard />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New Quote</div>
          </div>

          <div className="flex items-center">
            <TruckLogo />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New Shipment</div>
          </div>

          <div className="flex items-center">
            <ECommerce />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">E-Commerce</div>
          </div>

          <div className="flex items-center">
            <BoxLight />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Product</div>
          </div>

          <div className="flex items-center">
            <ClipBoard />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Address Book</div>
          </div>

          <div className="flex items-center">
            <BoxLight />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Shipment Profile</div>
          </div>

          <div className="flex items-center">
            <ECommerce />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">New PFQ/New RFB</div>
          </div>

          <div className="flex items-center">
            <ClipBoard />
            <div className="text-[#FFFFFF80] font-poppins text-base font-medium ml-4 leading-5">Reports</div>
          </div>
          
        </nav>
      </div>
    </header>
  )
}

interface NavProps {
  href?: string
  onClick?: () => void | Promise<void>
  children: React.ReactNode
}

const Nav = ({ href = '#', children, onClick }: NavProps) => (
  <Link href={href} className="block text-white relative group" onClick={onClick}>
    <span className="absolute w-full h-full group-hover:bg-green transition duration-300 active:scale-[0.97] group-hover:blur-md active:blur-none active:bg-transparent group-hover:scale-y-[60%] group-hover:scale-x-[105%]" />
    <span className="relative group-hover:text-white block">{children}</span>
  </Link>
)