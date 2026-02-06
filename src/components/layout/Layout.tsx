import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { PopoutTerminal } from '../terminal'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <PopoutTerminal />
    </div>
  )
}
