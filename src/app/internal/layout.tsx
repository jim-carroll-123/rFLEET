import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import Sidebar from '@components/layout/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      {children}
    </div>
  )
}
