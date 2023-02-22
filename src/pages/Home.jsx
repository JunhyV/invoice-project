import React from 'react'
import { Link } from 'react-router-dom'
import InvoiceContainer from '../components/InvoiceContainer'

const Home = () => {
  return (
    <div>
      go to <Link to={'/invoice'}>invoice</Link> 
      <header>header</header>
      <InvoiceContainer/>
    </div>
  )
}

export default Home