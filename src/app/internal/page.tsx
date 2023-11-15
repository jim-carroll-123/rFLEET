'use client';

import React, { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';



import Link from 'next/link'

import { WMSSection } from './sections/WMS/page'
import { AddressBookSection } from './sections/address-book/page'
import { DashboardSection } from './sections/dashboard/page'
import { ECommerceSection } from './sections/ecommerce/page'
import { NewShipmentSection } from './sections/new-shipment/page'
import { NewPFQSection } from './sections/newPFQ/page'
import { NewQuoteSection } from './sections/newquote/page'
import { ProductSection } from './sections/product/page'
import { ReportsSection } from './sections/reports/page'
import { ShipmentProfileSection } from './sections/shipment-profile/page'

// Define the props that Home component accepts
interface HomeProps {
  // ... you can add more props here if needed
}

export default function Home(props: HomeProps) {
  const [currentHash, setCurrentHash] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <ParallaxProvider>
      <PageContent currentHash={currentHash} />
    </ParallaxProvider>
  )
}

// Define the props that PageContent component accepts
interface PageContentProps {
  currentHash: string
}

const PageContent = ({ currentHash }: PageContentProps) => {
  const renderSection = () => {
    switch (currentHash) {
      case '#dashboard':
        return <DashboardSection />
      case '#new-quote':
        return <NewQuoteSection />
      case '#new-shipment':
        return <NewShipmentSection />
      case '#e-commerce':
        return <ECommerceSection />
      case '#product':
        return <ProductSection />
      case '#wms':
        return <WMSSection />
      case '#addressbook':
        return <AddressBookSection />
      case '#shipmentprofile':
        return <ShipmentProfileSection />
      case '#newpfq-newrfb':
        return <NewPFQSection />
      case '#reports':
        return <ReportsSection />

      default:
        return <DashboardSection />
    }
  }

  return <main>{renderSection()}</main>
}