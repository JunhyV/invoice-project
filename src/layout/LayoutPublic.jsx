import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div>
      <aside>
        barra lateral
      </aside>
      <Outlet/>
    </div>
  )
}

export default LayoutPublic