'use client';

import React, { useEffect, useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { DashboardSection } from './sections/Dashboard'
import { NewQuoteSection } from './sections/New Quote'
import { NewShipmentSection } from './sections/NewShipment'


// Define the props that Home component accepts
interface HomeProps {
  // ... you can add more props here if needed
}

export default function Home(props: HomeProps) {
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash)

  useEffect(() => {
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
      default:
        return <DashboardSection />
    }
  }

  return <main>{renderSection()}</main>
}