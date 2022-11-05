import React from 'react'

import Zuri from '../Assest/Zuri.svg'
import i4G from '../Assest/i4G.png'
const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='zuri'>
            <span></span>
            <img src={Zuri} alt="zuri" />
        </div>

        <div>
            <p>HNG Internship 9 Frontend Task</p>
        </div>

        <div className='i4g'>
            <img src={i4G} alt="i4G" />
        </div>
    </div>
  )
}

export default Footer