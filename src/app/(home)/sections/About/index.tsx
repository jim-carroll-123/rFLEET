import { BreakD } from '@components/ui/BreakD'
import { Title } from '@components/ui/Typography'

export const AboutSection = () => {
  return (
    <section className="lg:py-[130px] py-[100px] bg-[#191a4c] text-white">
      <div className="container text-center lg:mb-[72px] mb-[54px]">
        <div className="flex justify-center lg:mb-[26px] mb-[20px]">
          <Title>About Us</Title>
        </div>
        <div className="text-body-xl lg:mb-[62px] mb-[46px]">
          At rFleet Inc., we unite shippers, carriers, sellers, and buyers in a<BreakD />
          decentralized ecosystem, cultivating collaboration across the supply
          <BreakD />
          chain. We advocate fair wages and practices, promoting transparency
          <BreakD />
          and accountability from carriers, drivers, and vendors. Together, we&apos;re
          <BreakD />
          transforming the industry, forging a better way to do business.
        </div>
        <button className="hover-bg-green-glow lg:w-auto w-full lg:px-[80px] px-[60px] lg:py-[15px] py-[12px] border border-solid border-gray-200 lg:text-[20px] text-[15px] font-semibold rounded-md bg-[#2F80ED] hover:bg-[#4796fd] transition duration-300">
          LEARN MORE
        </button>
      </div>
      <div className="container">
        <div className="relative">
          <div
            className="absolute left-0 right-0 top-0 bottom-0"
            style={{ background: 'linear-gradient(135deg, #69EACB 0%, #5FA4E6 53.12%, #6654F1 100%)' }}
          ></div>
          <div className="relative grid lg:grid-cols-4 grid-cols-2 gap-[2px]">
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">~$100 billion</h4>
              <div className="text-body-lg text-gray-400">cumulative trading volume to date</div>
            </div>
            <div
              className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]"
              style={{ background: 'linear-gradient(135deg, #69EACB 0%, #5FA4E6 53.12%, #6654F1 100%)' }}
            >
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">0.8%</h4>
              <div className="text-body-lg">of the global crypto spot trading volume</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">~30</h4>
              <div className="text-body-lg text-gray-400">Gravity Teammates (& growing)</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">25+</h4>
              <div className="text-body-lg text-gray-400">leading global and local crypto exchanges</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">2017</h4>
              <div className="text-body-lg text-gray-400">start, crypto-natives</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">1,200+</h4>
              <div className="text-body-lg text-gray-400">crypto-asset pairs</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">24/7</h4>
              <div className="text-body-lg text-gray-400">liquidity</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h4 className="font-[500] lg:mb-[15px] mb-[13px]">5 billion+</h4>
              <div className="text-body-lg text-gray-400">trades done to date</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
