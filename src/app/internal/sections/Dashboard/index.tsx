import { Message } from '@components/ui/Message'
import { Phone } from '@components/ui/Phone'
import { Video } from '@components/ui/Video'

export const DashboardSection = () => {
  return (
    <div>
      <div className="bg-[#141943] h-12"></div>
      <div className="relative p-8 bg-[#F6F7FF] overflow-hidden h-[100vh]">
        <div className="flex justify-between">
          <div className="text-[#141943] font-poppins text-4xl font-bold leading-11 uppercase">New Shipment</div>
          <div className="flex">
            <div className="w-10 h-10 mr-2 bg-white border border-[#2F80ED] rounded-md">
              <div className="h-10 flex justify-center items-center">
                <Phone />
              </div>
            </div>

            <div className="w-10 h-10 mr-2 bg-white border border-[#2F80ED] rounded-md">
              <div className="h-10 flex justify-center items-center">
                <Video />
              </div>
            </div>

            <div className="w-10 h-10 mr-2 bg-white border border-[#2f80ED] rounded-md">
              <div className="h-10 flex justify-center items-center">
                <Message />
              </div>
            </div>
            <div className="w-10 h-10 bg-white border border-[#2f80ED] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
