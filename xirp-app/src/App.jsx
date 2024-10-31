// import './App.css'
import Navbar from "./components/Navbar"

import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      Rodapé
    </>
  )
}

export default App
