import Footer from '../components/footer';
import { Header } from '../components/header'


const AddressBookSection = () => {
  return (
    <main>
      <div className="bg-[#141943] h-12"></div>
      <div className="relative p-8 bg-[#F6F7FF] h-[100vh] overflow-hidden">
        <Header title="Address Book" />
        <Footer />
      </div>
    </main>
  )
}

export default AddressBookSection
