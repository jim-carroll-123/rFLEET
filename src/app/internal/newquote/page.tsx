import { Header } from '../components/header'
import QuoteSection from './quotesection'

export const NewQuoteSection = () => {
  return (
    <main>
      <div className="bg-[#141943] h-12"></div>
      <div className="relative p-8 bg-[#F6F7FF] h-[100vh] w-[82vw] overflow-hidden">
        <Header title="New Quote" />
        <QuoteSection />
      </div>
    </main>
  )
}
export default NewQuoteSection
