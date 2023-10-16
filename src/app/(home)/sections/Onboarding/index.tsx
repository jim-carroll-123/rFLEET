'use client'

import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ParallaxBanner } from 'react-scroll-parallax'

import Link from 'next/link'

import WalletMoney from '@assets/icons/wallet-money.svg'
import bgWireframeGlobe from '@assets/images/bg-wireframe-globe.png'
import gradientCard from '@assets/images/gradient-card-cyan-indigo-to-br.png'
import { BRD } from '@components/ui/BRD'
import { TransparentButton } from '@components/ui/Button'
import { GlobeLoader } from '@components/ui/Loaders'
import { Modal } from '@components/ui/Modal'
import { Title } from '@components/ui/Typography'

import { CarrierEquipment } from './CarrierEquipment'
import { CompanyInfo } from './CompanyInfo'
import { CompanyValidation } from './CompanyValidation'
import { ContactForm } from './ContactForm'
import { Contacts } from './Contacts'
import { DriverForm } from './DriverForm'
import { DriverInfo } from './DriverInfo'
import { InsurancePolicy } from './InsurancePolicy'
import { InsurancePolicyForm } from './InsurancePolicyForm'
import { PayeeInfo } from './PayeeInfo'
import { PreferedLanes } from './PreferredLanes'
import { TermsAndConditions } from './TermsAndConditions'

export const OnboardingSection = () => {
  const [onboardingModalOpen, setOnboardingModalOpen] = useState<boolean>(false)
  const [loadingNext, setLoadingNext] = useState<boolean>(false)
  const [activeFormIndex, setActiveFormIndex] = useState<number>(0)

  const gotoNextForm = () => {
    setLoadingNext(true)
    setTimeout(() => {
      setActiveFormIndex((prev) => prev + 1)
      setLoadingNext(false)
    }, 1000)
  }

  useEffect(() => {
    setActiveFormIndex(0)
  }, [onboardingModalOpen])

  const onboardingForms: {
    [key: number]: JSX.Element
  } = {
    0: <CompanyInfo onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    1: <TermsAndConditions onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    2: <PayeeInfo onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    3: <CompanyValidation onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    4: <CarrierEquipment onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    5: <DriverInfo onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    6: <PreferedLanes onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    7: <InsurancePolicy onClose={() => setOnboardingModalOpen(false)} onSubmit={gotoNextForm} />,
    8: <Contacts onClose={() => setOnboardingModalOpen(false)} />
  }
  return (
    <section id="onboarding-section">
      <ParallaxBanner className="parallax-banner" layers={[{ image: bgWireframeGlobe.src, speed: -20 }]}>
        <div
          className="absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,3,26,0.30)] opacity-90"
          style={{ backdropFilter: 'blur(12.5px)' }}
        />
        <div className="absolute left-0 right-0 top-0 bottom-0">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-for-onboarding-section" />
        </div>
        <div className="relative container lg:pt-[100px] pt-[75px] lg:pb-[267px] pb-[200px] text-white">
          <div className="flex justify-center text-center lg:mb-[117px] mb-[50px]">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <Title>CARRIER NETWORK ONBOARDING</Title>
              </div>
              <div className="text-body-lg font-normal lg:mb-[38px] mb-[28px]">
                Join our Expansive Carrier Network built by truckers, for truckers supporting
                <BRD />
                the fight for humanity and fair wages. Onboard as a Truck Owner, Skilled
                <BRD />
                Driver, Mechanic, Tow, and More..., or Deliver with Your Personal Vehicle.
              </div>
              <div className="w-full lg:px-[20px] px-[15px] lg:py-[16px] py-[12px] border-[1.5px] border-solid border-gray-200 text-input font-normal rounded-md bg-gradient-blur-dialog backdrop-blur-md transition duration-300">
                Quote 2 pallets from Cleveland, OH to Los Angeles, CA?
              </div>
            </div>
          </div>
          <div className="lg:grid flex lg:grid-cols-3 flex-col gap-[28px]">
            <GradientCard>
              <WalletMoney />
              <div className="text-body-xl font-semi text-center">
                TRUCKING COMPANIES,
                <BRD />
                DISPATCHERS,
                <BRD />
                AND COORDINATORS.
              </div>
              <div className="">
                Create a Profile to Effortlessly Track
                <BRD />
                and Manage Your Truck Fleet,
                <BRD />
                Schedule, and Hire Drivers, Receive
                <BRD />
                Weather Reports and Market
                <BRD />
                Updates, and Streamline Invoices
                <BRD />
                with Quick Pay Options.
              </div>
              <Link href="/signup" className="block w-full">
                <TransparentButton>Register</TransparentButton>
              </Link>
            </GradientCard>
            <div className="lg:translate-y-[-80px]">
              <GradientCard>
                <WalletMoney />
                <div className="text-body-xl font-semi text-center">
                  CDL SEMI-TRUCK, SKILLED
                  <BRD />
                  BOX TRUCK, AND PERSONAL
                  <BRD />
                  VEHICLE DRIVERS
                </div>
                <div className="">
                  Discover Your Next Move: Find
                  <BRD />
                  Companies to Work for, Manage
                  <BRD />
                  Your Schedule, Availability, and
                  <BRD />
                  Elevate Your Resume with Valuable
                  <BRD />
                  Experience, Training, and
                  <BRD />
                  References.
                </div>
                <Link href="/signup" className="block w-full">
                  <TransparentButton>Register</TransparentButton>
                </Link>
              </GradientCard>
            </div>
            <GradientCard>
              <WalletMoney />
              <div className="text-body-xl font-semi">
                OEM, VENDORS, MECHANICS
                <BRD />
                TOWING COMPANIES, AND
                <BRD />
                TIRE SHOP.
              </div>
              <div className="">
                Fuel Your Success - Join Now and
                <BRD />
                Become a Link in the Logistics Chain
                <BRD />
                by Elevating Your Business and
                <BRD />
                Strengthening the Logistics Industry.
              </div>
              {/* <Link href="/signup" className="block w-full">
                <TransparentButton onClick={() => setOnboardingModalOpen(true)}>Register</TransparentButton>
              </Link> */}

              {/* tobe removed */}
              <TransparentButton onClick={() => setOnboardingModalOpen(true)}>Register</TransparentButton>
            </GradientCard>
          </div>
        </div>
      </ParallaxBanner>
      {loadingNext ? (
        <GlobeLoader />
      ) : (
        <Modal
          open={onboardingModalOpen}
          onClose={() => setOnboardingModalOpen(false)}
          className="max-h-[96vh]  my-auto p-4 lg:max-w-[810px]  w-full lg:rounded-[10px] rounded-[8px] bg-[#1a194990] border border-[#1a1949] shadow-[0px,4px,4px,0px,rgba(0,0,0,0.25)] backdrop-blur-[25px] z-999"
        >
          {onboardingForms[activeFormIndex]}
        </Modal>
      )}
    </section>
  )
}

export const GradientCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative bg-gradient-blur-dialog"
    style={{ backgroundImage: `url(${gradientCard.src})`, backgroundSize: '100% 100%' }}
  >
    <div className="absolute left-0 right-0 top-0 bottom-0 m-[2px] bg-gradient-blur-dialog rounded-[10px]" />
    <div className="relative left-0 right-0 top-0 bottom-0 lg:px-[28px] px-[22px] lg:py-[34px] py-[26px] flex flex-col items-center lg:gap-[25px] gap-[18px] text-center">
      {children}
    </div>
  </div>
)
