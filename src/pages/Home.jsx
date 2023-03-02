import React, { useState } from 'react'
import Empty from '../components/home/Empty'
import Header from '../components/home/Header'
import InvoiceContainer from '../components/home/InvoiceContainer'
import Invoice from '../components/invoice/Invoice'

const Home = () => {
  const [displayNew, setDisplayNew] = useState(false);
  const array = [1];
  
  return (
    <div className='home'>
      {displayNew ? <Invoice data={displayNew} set={setDisplayNew}/> : null}
      <Header data={displayNew} set={setDisplayNew}/>
      {array.length > 0 ? <InvoiceContainer/>: <Empty/>}

    </div>
  )
}

export default Home