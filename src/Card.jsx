import React from 'react'
import {Link} from  'react-router-dom'


const Card = (props) => {
    return (
        <>
            <div className='main_card'>
            <div className="card" >
                <img src={props.img} className="card-img-top" alt="someyhing went wrong" />
                
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <Link to="#" className="btn btn-primary" >Go somewhere </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card
