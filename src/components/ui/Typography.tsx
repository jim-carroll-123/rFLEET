import { cn } from '@lib/utils'

export const Title = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <h3 className={cn('font-bold mb-[15px] lg:mb-[40px] text-gradient bg-gradient-primary-to-r', className)} {...props}>
    {children}
  </h3>
)
