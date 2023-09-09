import planetEarth from '@assets/images/bg-planet-earth.jpeg'
import { Title } from '@components/ui/Typography'

export default function Index() {
  return (
    <main className="relative flex" style={{ background: `url(${planetEarth.src}) no-repeat center / cover` }}>
      <div className="flex flex-1 bg-[#1a194990]">
        <div className="container flex-1 flex justify-center items-center">
          <div className="bg-gradient-dialog backdrop-blur lg:px-[80px] px-[60px] lg:pt-[80px] pt-[60px] lg:pb-[40px] pb-[30px] flex flex-col lg:gap-[36px] gap-[27px] max-w-[720px] w-full">
            <Title className="text-5xl font-semibold">SHIPPING SIMPLIFIED</Title>
          </div>
        </div>
      </div>
    </main>
  )
}
