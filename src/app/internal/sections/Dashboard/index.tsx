import { useEffect, useState } from 'react'

import Map from '@assets/images/maps.png'
import User from '@assets/images/user.png'
import { Message } from '@components/ui/Message'
import { Phone } from '@components/ui/Phone'
import { Video } from '@components/ui/Video'

export const DashboardSection = () => {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    setSelected(0)
  }, [])

  const handleClick = (index: number) => {
    setSelected(index)
  }

  const getBgColor = (index: number) => {
    if (selected === index) {
      return 'bg-blue-500 !text-white'
    }
    return ''
  }

  return (
    <div>
      <div className="bg-[#141943] h-12"></div>
      <div className="relative p-8 bg-[#F6F7FF] overflow-hidden">
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
            <div className="w-10 h-10 bg-white border border-[#2f80ED] rounded-md">
              <img src={User.src} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg w-90 h-90 bg-[#FFF] shadow-xl">
          <div className="flex justify-between p-4">
            <div className="text-[#0C0A09] flex items-center font-poppins text-b2 font-semibold">Shipping</div>

            <div className="flex border border-[#B8BEF8] rounded-d-6 p-[2px] justify-content-center w-60">
              <div className="flex w-[100%]">
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColor(
                    0
                  )}`}
                  onClick={() => handleClick(0)}
                >
                  <span>Flat</span>
                </div>

                {/* Quickest */}
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColor(
                    1
                  )}`}
                  onClick={() => handleClick(1)}
                >
                  <span>3D</span>
                </div>
              </div>
            </div>
          </div>

          <img src={Map.src} alt="" />
        </div>

        <div className="mt-10 rounded-lg w-90 h-90 bg-[#FFF] p-4">
          <div className="text-black">Search</div>
          <div className="text-black">Status</div>
        </div>
      </div>
    </div>
  )
}
