import React from 'react'
import Card from './Card'
import {Cdata} from './Cdata'


const Services = () => {
    // const [data,setData] = useState();
    
    return (
        <>

            <section className='services'>
                <h3 className='heading'>our services</h3>
                <div className='container'>
                    <div className='card_wrappers'>
                        {
                            Cdata.map((val,index)=>{
                                return <Card id={index} key={index} img={val.imgsrc} title={val.title}/>
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services
