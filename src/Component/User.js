import React from 'react'

import Social from './Social'
import Link from './Link'
import Profileuser from './Profileuser'

const User = () => {
  return (
    <div className='app__profile'>
      <Profileuser />
      <Link />
      <Social />
    </div>
  )
}

export default User