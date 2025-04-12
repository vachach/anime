import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return(
    <div className="bg-black min-h-screen overflow-x-hidden text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout