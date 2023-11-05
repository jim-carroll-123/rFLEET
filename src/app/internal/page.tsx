'use client';

import { ParallaxProvider } from 'react-scroll-parallax'

import { DashboardSection } from './sections/Dashboard'
import { NewQuoteSection } from './sections/New Quote'

export default function Home() {
  return (
    <ParallaxProvider>
      <PageContent />
    </ParallaxProvider>
  )
}

const PageContent = () => {
  return (
    <main>
      <DashboardSection />
      
    </main>
  )
}