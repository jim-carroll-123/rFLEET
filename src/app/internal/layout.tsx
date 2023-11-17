import Sidebar from './components/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className='ml-[20%] w-[80%] '>
      {children}
      </div>
    </div>
  )
}
