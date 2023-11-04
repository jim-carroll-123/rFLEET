'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { VideoModal } from '@app/(home)/sections/Banner/VideoModal'
import Close from '@assets/icons/close.svg'
import Hamburger from '@assets/icons/hamburger.svg'
import Lock from '@assets/icons/lock.svg'
import { Button } from '@components/ui/Button'
import { Logo } from '@components/ui/Logo'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openVideoModal, setOpenVideoModal] = useState(false)
  const pathName = usePathname()

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    closeMenu()
  }, [pathName])

  return (
    <header className="bg-[#252C65]">
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex justify-between items-center p-6">
          <Logo />
        </div>
        <nav className="flex flex-col gap-6 p-8">
          <Nav>Dashboard</Nav>
          <Nav>New Quote</Nav>
          <Nav>New Shipment</Nav>
          <Nav>E-Commerce</Nav>
          <Nav>Product</Nav>
          <Nav>Address Book</Nav>
          <Nav>Shipment Profile</Nav>
          <Nav>New PFQ/New RFB</Nav>
          <Nav>Reports</Nav>
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
