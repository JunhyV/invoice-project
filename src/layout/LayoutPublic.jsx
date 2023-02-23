import React from 'react'
import { Outlet } from 'react-router-dom'
import AsideBar from '../components/aside-bar/AsideBar.jsx';

const LayoutPublic = () => {
  console.log();
  return (
    <div>
      <AsideBar/>
      <Outlet/>
    </div>
  )
}

export default LayoutPublic