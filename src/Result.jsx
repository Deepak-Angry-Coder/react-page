import React from 'react'
import Images from './images/search.svg'


const Result = (props) => {
    

    const img = `https://source.unsplash.com/700x350/?${props.name}`

    return (
        <>
        {
            props.name ? 
            
            <div className='image'>
               <img src={img} alt='something went wrong'/>
            </div> 
            
            :  <div className='image'>
                 <img src={Images} className='s_icon' alt='something went wrong'/>
               </div>
        }

        </>
    )
}

export default Result;
