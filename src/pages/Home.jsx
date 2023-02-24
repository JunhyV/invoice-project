import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import InvoiceContainer from '../components/InvoiceContainer'

const Home = () => {
  return (
    <div className='home'>
      go to <Link to={'/invoice'}>invoice</Link>
      <Header/>
      <InvoiceContainer/>
    </div>
  )
}

export default Home