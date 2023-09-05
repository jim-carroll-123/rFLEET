'use client'

import { ParallaxProvider } from 'react-scroll-parallax'

import { BannerSection } from './sections/Banner'
import { CalculatorSection } from './sections/Calculator'
import { SearchSection } from './sections/Search'

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
      <BannerSection />
      <SearchSection />
      <CalculatorSection />
    </main>
  )
}
