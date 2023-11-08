import { Header } from '../../components/header'
import { CalculatorSection } from './Calculator'

export const NewShipmentSection = () => {
  return (
    <div>
      <div className="bg-[#141943] h-12"></div>
      <div className="relative p-8 bg-[#F6F7FF] h-[200vh] overflow-hidden">
        <Header title="New Shipment" />
        <CalculatorSection />
      </div>
    </div>
  )
}
