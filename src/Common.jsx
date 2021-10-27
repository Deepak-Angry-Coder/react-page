import React from 'react'
import { Link } from 'react-router-dom'


const Common = (props) => {
    return (
        <>
            <div className='container'>
            <div className='hero_wrapper'>
              <div className='left_s'>
                 <h3>{props.heading}<br/> <span>Angry_Coder</span></h3>
                 <p>we are team of talanted developer making website</p>
                 <Link className='btns' to={props.visit}> {props.btnName} </Link>
              </div>

              <div className='right_s'>
                <img src={props.img} alt='something went wrong' />
              </div>
            </div>
            </div>
        </>
    )
}

export default Common
