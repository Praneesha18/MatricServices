import React from 'react'
// import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer"
import { Outlet } from 'react-router-dom'
const Mainlayout = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainlayout