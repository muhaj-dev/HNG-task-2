import React from 'react'

import pimg from "../Assest/Profile.svg"
import icon1 from "../Assest/share.svg"
import icon2 from "../Assest/threedots.svg"

const Profileuser = () => {
  return (
    <div id="profile__img">
        <div>
            <div>
                <img src={pimg}  alt="jbcj"/>
            </div>
            <p>Annette Black</p>
            <p id="slack">@muhaj</p>
      </div>
      <div className='icon'>
        <img src={icon1} alt="icon" />
        <img src={icon2} alt='ncjvd' />
      </div>
    </div>
  )
}

export default Profileuser