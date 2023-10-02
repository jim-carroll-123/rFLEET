import Link from 'next/link'

import bgCurveStripes from '@assets/images/bg-curve-stripes.png'
import { BRD } from '@components/ui/BRD'
import { Title } from '@components/ui/Typography'

export const AboutSection = () => {
  return (
    <section className="relative lg:pt-[70px] pt-[48px] lg:pb-[100px] pb-[80px] bg-[#191a4c] text-white overflow-hidden">
      <img className="absolute lg:block hidden left-[0] top-[0px] z-[1]" src={bgCurveStripes.src} />
      <div className="relative z-[2] container text-center lg:mb-[72px] mb-[54px]">
        <div className="flex justify-center lg:mb-[26px] mb-[20px]">
          <Title>About Us</Title>
        </div>
        <div className="text-body-xl lg:mb-[62px] mb-[46px]">
          At rFleet Inc., we unite shippers, carriers, sellers, and buyers in a<BRD />
          decentralized ecosystem, cultivating collaboration across the supply
          <BRD />
          chain. We advocate fair wages and practices, promoting transparency
          <BRD />
          and accountability from carriers, drivers, and vendors. Together, we&apos;re
          <BRD />
          transforming the industry, forging a better way to do business.
        </div>
        <Link href="/signin" className="hover:text-white">
          <button className="hover-bg-green-glow lg:w-auto w-full lg:px-[80px] px-[60px] lg:py-[15px] py-[12px] border border-transparent hover:border-gray-200 lg:text-[20px] text-[15px] font-semibold rounded-md bg-[#2F80ED] hover:bg-[#4796fd] transition duration-300">
            LOGIN
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-card"></div>
          <div className="relative grid lg:grid-cols-4 grid-cols-2 gap-[2px]">
            <Card>{['~$100 billion', 'cumulative trading volume to date']}</Card>
            <Card>{['0.8%', 'of the global crypto spot trading volume']}</Card>
            <Card>{['~30', 'Gravity Teammates (& growing)']}</Card>
            <Card>{['25+', 'leading global and local crypto exchanges']}</Card>
            <Card>{['2017', 'start, crypto-natives']}</Card>
            <Card>{['1,200+', 'crypto-asset pairs']}</Card>
            <Card>{['24/7', 'liquidity']}</Card>
            <Card>{['5 billion+', 'trades done to date']}</Card>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CardProps {
  children: [string, string]
}

const Card = ({ children }: CardProps) => (
  <div className="relative cursor-default group text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
    <div className="absolute z-[2] group-hover:bg-gradient-card w-full h-full left-0 top-0"></div>
    <h4 className="relative z-[3] font-medium lg:mb-[15px] mb-[13px]">{children[0]}</h4>
    <div className="relative z-[3] text-body-lg text-gray-400 group-hover:text-white">{children[1]}</div>
  </div>
)
