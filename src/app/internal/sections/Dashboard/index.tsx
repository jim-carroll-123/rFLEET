import { useEffect, useState } from 'react';



import Map from '@assets/images/maps.png';
import User from '@assets/images/user.png'
import { Arrows } from '@components/ui/Arrows';
import { DropdownArrow } from '@components/ui/DropdownArrow';
import { Input } from '@components/ui/Input';
import { Message } from '@components/ui/Message';
import { Phone } from '@components/ui/Phone';
import { Search } from '@components/ui/Search';
import { Video } from '@components/ui/Video';


export const DashboardSection = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<number | null>(null)

  useEffect(() => {
    setSelected(0)
  }, [])

  const handleClick = (index: number) => {
    setSelected(index)
  }

  useEffect(() => {
    setSelectedType(0)
  }, [])

  const handleClickType = (index: number) => {
    setSelectedType(index)
  }

  const getBgColorType = (index: number) => {
    if (selectedType === index) {
      return 'bg-blue-500 !text-white'
    }
    return ''
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
            <div className="w-12 h-12 mr-2 bg-white border border-[#2F80ED] rounded-md">
              <div className="h-12 flex justify-center items-center hover:cursor-pointer">
                <Phone />
              </div>
            </div>

            <div className="w-12 h-12 mr-2 bg-white border border-[#2F80ED] rounded-md">
              <div className="h-12 flex justify-center items-center hover:cursor-pointer">
                <Video />
              </div>
            </div>

            <div className="w-12 h-12 mr-2 bg-white border border-[#2f80ED] rounded-md">
              <div className="h-12 flex justify-center items-center hover:cursor-pointer">
                <Message />
              </div>
            </div>
            <div className="w-12 h-12 bg-white border border-[#2f80ED] rounded-md hover:cursor-pointer">
              <img src={User.src} alt="" />
            </div>
          </div>
        </div>

        <div
          className="mt-10 rounded-lg w-90 h-90 bg-[#FFF] shadow-xl"
          style={{ boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.025)' }}
        >
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
          <div className="text-gray border border-gray p-2 rounded-lg flex">
            <Search />
            <input className="ml-2 w-[100%]" placeholder="Search"/>
          </div>

          <div className="text-black mt-4 flex">
            <div className="flex items-center text-black font-poppins text-b3 font-medium">Status</div>
            <div className="flex border border-[#B8BEF8] rounded-d-6 p-[2px] justify-content-center ml-4">
              <div className="flex">
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    0
                  )}`}
                  onClick={() => handleClickType(0)}
                >
                  <span className="px-6">All</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    1
                  )}`}
                  onClick={() => handleClickType(1)}
                >
                  <span className="px-6">Parcel</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    2
                  )}`}
                  onClick={() => handleClickType(2)}
                >
                  <span className="px-6">LTL</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    3
                  )}`}
                  onClick={() => handleClickType(3)}
                >
                  <span className="px-6">FTL</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    4
                  )}`}
                  onClick={() => handleClickType(4)}
                >
                  <span className="px-6">Drayage</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    5
                  )}`}
                  onClick={() => handleClickType(5)}
                >
                  <span className="px-6">Rail</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    6
                  )}`}
                  onClick={() => handleClickType(6)}
                >
                  <span className="px-6">Ocean</span>
                </div>
                <div
                  className={`px-3 p-1 w-[50%] flex flex-row justify-center text-black items-center cursor-pointer rounded-md ${getBgColorType(
                    7
                  )}`}
                  onClick={() => handleClickType(7)}
                >
                  <span className="px-6">Air</span>
                </div>
              </div>
            </div>
            <div className="w-12 border border-[#2F80ED] ml-2 rounded-lg hover:cursor-pointer">
              <div className="h-12 flex justify-center items-center hover:cursor-pointer">
                <Arrows />
              </div>
            </div>
            <div className="flex items-center ml-4">Entries</div>
            <div className=" border border-[#2F80ED] ml-4 flex rounded-lg hover:cursor-pointer">
              <div className="flex items-center px-4">15</div>
              <div className="flex items-center px-2">
                <DropdownArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}