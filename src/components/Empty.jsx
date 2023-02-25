import React from 'react';
import empty from "../assets/illustration-empty.svg";

const Empty = () => {
  return (
    <div className='empty'>
        <img src={empty} alt="empty-img" />
        <h1>There is nothing here</h1>
        <p className='color-gray'>Create an invoice by clicking the <span className='color-dark-gray'>New</span> button and get started</p>
    </div>
  )
}

export default Empty