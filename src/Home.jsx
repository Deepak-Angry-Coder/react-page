import React from 'react'
import Common from './Common'
import Image from './images/undraw_version_control_re_mg66.svg'

const Home = () => {
  const href = '/services'
  return (
        <>
            <Common 
            heading='grow your business with' 
            img={Image}
            visit={href}
            btnName='Get started'
            />
        </>
    )
}

export default Home
