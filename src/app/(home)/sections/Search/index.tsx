'use client'

import { ParallaxBanner } from 'react-scroll-parallax'

import { SearchInput } from '@app/(home)/components/SearchInput'
import bgEarth from '@assets/images/bg-earth.jpeg'
import { Title } from '@components/ui/Typography'

import { Airplane } from './Airplane'

export const SearchSection = () => (
  <section>
    <ParallaxBanner className="parallax-banner" layers={[{ image: bgEarth.src, speed: -20 }]}>
      <div className="relative flex flex-col h-full">
        <div className="h-[100px] shrink-0 bg-gradient-secondary-fade-in-to-top" />

        <div className="container flex flex-col flex-1 justify-center items-center text-center gap-[42px] lg:gap-[56px] lg:py-[40px] py-[30px]">
          <div>
            <Title>SEARCH ENGINE & OPTIMIZATION</Title>
            <div className="text-body-xl text-gray-300 font-[500]">What do you want to look for today?</div>
          </div>
          <div className="w-full flex flex-col items-center">
            <SearchInput />
            <div className="text-white">
              Tip: ask me any questions or tasks relating to transportation and logistics
            </div>
          </div>
          <div className="flex flex-col gap-[15px] items-center">
            <Prompt>Quote 2 pallets from Cleveland, OH to Los Angeles, CA?</Prompt>
            <Prompt>How long is the estimated transit time from Atlanta, GA to Seattle, WA?</Prompt>
            <Prompt>Take me to my dashboard.&quot;, or &quot;New Quote&quot;</Prompt>
          </div>
        </div>
        <div className="h-[100px] shrink-0 bg-gradient-secondary-fade-in-to-bottom" />
      </div>
      <Airplane />
    </ParallaxBanner>
  </section>
)

const Prompt = ({ children }: { children: React.ReactNode }) => (
  <div className="px-[12px] py-[8px] lg:px-[16px] lg:py-[10px] bg-blur hover-bg-green-glow">{children}</div>
)
