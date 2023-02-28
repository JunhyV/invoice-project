import React, { useState } from 'react'
import Empty from '../components/home/Empty'
import Header from '../components/home/Header'
import InvoiceContainer from '../components/home/InvoiceContainer'
import Calendar from '../components/invoice/Calendar'
import Invoice from '../components/invoice/Invoice'

const Home = () => {
  const [displayNew, setDisplayNew] = useState(false);
  return (
    <div className='home'>
      {displayNew ? <Invoice data={displayNew} set={setDisplayNew}/> : null}
      <Header data={displayNew} set={setDisplayNew}/>
      <InvoiceContainer/>
      <Empty/>
    </div>
  )
}

export default Home