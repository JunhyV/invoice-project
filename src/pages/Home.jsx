import React from 'react'
import Empty from '../components/Empty'
import Header from '../components/Header'
import InvoiceContainer from '../components/InvoiceContainer'

const Home = () => {
  //Si darkmode es true entonces se dara la clase darkmode al Home
  return (
    <div className='home'>
      <Header/>
      <InvoiceContainer/>
      <Empty/>
    </div>
  )
}

export default Home