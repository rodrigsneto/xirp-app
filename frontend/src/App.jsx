import './App.css'
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"

import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Banner />
      <Outlet />
      {/* <hr /> */}
      {/* Rodapé */}
    </>
  )
}

export default App
