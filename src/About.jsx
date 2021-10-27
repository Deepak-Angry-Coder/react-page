import React from 'react'
import Common from './Common'
import Image from './images/undraw_Social_media_re_w12q.svg'


const About = () => {
  const href = '/contact'
    return (
        <>
            <Common 
            heading='welcome to about page' 
            img={Image}
            visit={href}
            btnName='contact now'
            />
        </>
    )
}

export default About
