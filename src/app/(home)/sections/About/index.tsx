import { BreakD } from '@components/ui/BreakD'

export const AboutSection = () => {
  return (
    <section className="lg:py-[130px] py-[100px] bg-[#191a4c] text-white">
      <div className="container text-center lg:mb-[72px] mb-[54px]">
        <div className="flex justify-center lg:mb-[26px] mb-[20px]">
          <h3 className="font-bold mb-[15px] lg:mb-[40px] text-gradient bg-gradient-primary-to-r">ABOUT US</h3>
        </div>
        <h6 className="lg:mb-[62px] mb-[46px]">
          At rFleet Inc., we unite shippers, carriers, sellers, and buyers in a<BreakD />
          decentralized ecosystem, cultivating collaboration across the supply
          <BreakD />
          chain. We advocate fair wages and practices, promoting transparency
          <BreakD />
          and accountability from carriers, drivers, and vendors. Together, we&apos;re
          <BreakD />
          transforming the industry, forging a better way to do business.
        </h6>
        <button className="lg:w-auto w-full lg:px-[80px] px-[60px] lg:py-[15px] py-[12px] border border-solid border-gray-200 lg:text-[20px] text-[15px] font-semibold rounded-md bg-[#2F80ED] hover:bg-[#4796fd] transition duration-300">
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
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">~$100 billion</h3>
              <div className="lg:text-[18px] text-[16px]">cumulative trading volume to date</div>
            </div>
            <div
              className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]"
              style={{ background: 'linear-gradient(135deg, #69EACB 0%, #5FA4E6 53.12%, #6654F1 100%)' }}
            >
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">0.8%</h3>
              <div className="lg:text-[18px] text-[16px]">of the global crypto spot trading volume</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">~30</h3>
              <div className="lg:text-[18px] text-[16px]">Gravity Teammates (& growing)</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">25+</h3>
              <div className="lg:text-[18px] text-[16px]">leading global and local crypto exchanges</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">2017</h3>
              <div className="lg:text-[18px] text-[16px]">start, crypto-natives</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">1,200+</h3>
              <div className="lg:text-[18px] text-[16px]">crypto-asset pairs</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">24/7</h3>
              <div className="lg:text-[18px] text-[16px]">liquidity</div>
            </div>
            <div className="text-center lg:px-[32px] px-[24px] lg:py-[30px] py-[24px] bg-[#191a4c]">
              <h3 className="font-[500] lg:mb-[15px] mb-[13px]">5 billion+</h3>
              <div className="lg:text-[18px] text-[16px]">trades done to date</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
