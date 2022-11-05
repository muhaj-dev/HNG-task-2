import React from 'react'

import Slack from '../Assest/Slack.svg'
import Github from '../Assest/Github.svg'

const Social = () => {
  return (
    <div className='app__social'>
      <img src={Slack} alt='slack' />
      <img src={Github} alt='github' />
    </div>
  )
}

export default Social