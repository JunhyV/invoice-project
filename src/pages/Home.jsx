import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Empty from '../components/home/Empty'
import Header from '../components/home/Header'
import InvoiceContainer from '../components/home/InvoiceContainer'
import Invoice from '../components/invoice/Invoice'

const Home = () => {
  const [displayNew, setDisplayNew] = useState(false);
  const invoices = useSelector(state => state.invoiceState.invoices);
  
  return (
    <div className='home'>
      {displayNew ? <Invoice data={displayNew} set={setDisplayNew}/> : null}
      <Header data={displayNew} set={setDisplayNew}/>
      {invoices.length > 0 
      ? invoices.map(invoice => <InvoiceContainer data={invoice}/>) 
      : <Empty/>}

    </div>
  )
}

export default Home