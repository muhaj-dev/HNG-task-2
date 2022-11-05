import React from 'react'

import Social from './Social'
import Link from './Link'
import Footer from './Footer'
import Profileuser from './Profileuser'

const User = () => {
  return (
    <div className='app__profile'>
      <Profileuser />
      <Link />
      <Social />
      <Footer />
    </div>
  )
}

export default User