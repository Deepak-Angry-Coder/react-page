import React, { useState } from 'react'
import Result from './Result';

const Search = () => {

const [data , setData] = useState('');

const inputEvent = (e)=>{
    const fetch  =  e.target.value;
    setData(fetch);
}


    return (
        <>
 
        <div className='I_wrapper'>
            <div className='search_'>
              <input type='text' value={data} placeholder='Search anything' onChange={inputEvent} />
            </div>
        
            <Result name={data} />
        
        </div>
        </>

    )
}

export default Search;
