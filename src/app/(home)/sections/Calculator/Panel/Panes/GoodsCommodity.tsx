import QuoteRequest from '@assets/icons/quote-request.svg'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'

interface Props {}

export const GoodsCommodity = ({}: Props) => {
  return (
    <div className="flex flex-col lg:gap-[32px] gap-[24px]">
      <h4 className="font-semibold">Provide Product Details</h4>
      <div>
        <div className="flex justify-between lg:mb-[16px] mb-[12px]">
          <div className="font-bold">What is the item?*</div>
          <div className="text-caption-xs">Quick Guide for Describing items</div>
        </div>
        <div className="flex">
          <Button size="lg" className="grow">
            <div className="flex items-center gap-d-10">
              Create Description
              <QuoteRequest />
            </div>
          </Button>
          <Input containerClassName="grow" placeholder="Enter your item descriptions (170 Character Maximum)" />
        </div>
      </div>
    </div>
  )
}
