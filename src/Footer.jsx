import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='container'>
                   <p>&copy; copyright 2021 | all right reserved by <Link to='#'>Angry_coder </Link></p>
                </div>
            </section>
        </>
    )
}

export default Footer;
