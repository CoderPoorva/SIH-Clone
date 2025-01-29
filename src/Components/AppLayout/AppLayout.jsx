import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout