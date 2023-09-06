import { ParallaxBanner } from 'react-scroll-parallax'

import WalletMoney from '@assets/icons/wallet-money.svg'
import bgWireframeGlobe from '@assets/images/bg-wireframe-globe.png'
import gradientCard from '@assets/images/gradient-card-cyan-indigo-to-br.png'
import { BreakD } from '@components/ui/BreakD'
import { TransparentButton } from '@components/ui/Button'

export const OnboardingSection = () => {
  return (
    <section className="">
      <ParallaxBanner className="parallax-banner" layers={[{ image: bgWireframeGlobe.src, speed: -20 }]}>
        <div
          className="absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,3,26,0.30)] opacity-60"
          style={{ backdropFilter: 'blur(12.5px)' }}
        />
        <div className="relative container lg:py-[110px] py-[90px] text-white">
          <div className="flex justify-center text-center lg:mb-[158px] mb-[50px]">
            <div className="flex flex-col">
              <h3 className="font-bold lg:mb-[30px] mb-[24px] text-gradient bg-gradient-primary-to-r">
                CARRIER NETWORK ONBOARDING
              </h3>
              <h6 className="lg:mb-[38px] mb-[28px]">
                Join our Expansive Carrier Network built by truckers, for truckers supporting
                <BreakD />
                the fight for humanity and fair wages. Onboard as a Truck Owner, Skilled
                <BreakD />
                Driver, Mechanic, Tow, and More..., or Deliver with Your Personal Vehicle.
              </h6>
              <div className="w-full lg:px-[30px] px-[26px] lg:py-[15px] py-[12px] border border-solid border-gray-200 lg:text-[20px] text-[15px] font-semi rounded-md bg-[#ffffff20] transition duration-300">
                Choose which profile best fits you?
              </div>
            </div>
          </div>
          <div className="lg:grid flex lg:grid-cols-3 flex-col gap-[28px]">
            <GradientCard>
              <WalletMoney />
              <h6 className="font-semi text-center">
                TRUCKING COMPANIES,
                <BreakD />
                DISPATCHERS,
                <BreakD />
                AND COORDINATORS.
              </h6>
              <div className="text-gray-200">
                Create a Profile to Effortlessly Track
                <BreakD />
                and Manage Your Truck Fleet,
                <BreakD />
                Schedule, and Hire Drivers, Receive
                <BreakD />
                Weather Reports and Market
                <BreakD />
                Updates, and Streamline Invoices
                <BreakD />
                with Quick Pay Options.
              </div>
              <TransparentButton>CONNECT US</TransparentButton>
            </GradientCard>
            <div className="lg:translate-y-[-80px]">
              <GradientCard>
                <WalletMoney />
                <h6 className="font-semi text-center">
                  CDL SEMI-TRUCK, SKILLED
                  <BreakD />
                  BOX TRUCK, AND PERSONAL
                  <BreakD />
                  VEHICLE DRIVERS
                </h6>
                <div className="text-gray-200">
                  Discover Your Next Move: Find
                  <BreakD />
                  Companies to Work for, Manage
                  <BreakD />
                  Your Schedule, Availability, and
                  <BreakD />
                  Elevate Your Resume with Valuable
                  <BreakD />
                  Experience, Training, and
                  <BreakD />
                  References.
                </div>
                <TransparentButton>CONNECT US</TransparentButton>
              </GradientCard>
            </div>
            <GradientCard>
              <WalletMoney />
              <h6 className="font-semi">
                OEM, VENDORS, MECHANICS
                <BreakD />
                TOWING COMPANIES, AND
                <BreakD />
                TIRE SHOP.
              </h6>
              <div className="text-gray-200">
                Fuel Your Success - Join Now and
                <BreakD />
                Become a Link in the Logistics Chain
                <BreakD />
                by Elevating Your Business and
                <BreakD />
                Strengthening the Logistics Industry.
              </div>
              <TransparentButton>CONNECT US</TransparentButton>
            </GradientCard>
          </div>
        </div>
      </ParallaxBanner>
    </section>
  )
}

export const GradientCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className="lg:px-[28px] px-[22px] lg:py-[34px] py-[26px] flex flex-col items-center lg:gap-[25px] gap-[18px] text-center"
    style={{ backgroundImage: `url(${gradientCard.src})`, backgroundSize: '100% 100%' }}
  >
    {children}
  </div>
)
