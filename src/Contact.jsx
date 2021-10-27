import React, { useState } from 'react'
import img from  './images/undraw_Personal_text_re_vqj3.svg'


const Contact = () => {
   const [data ,setData] = useState({
      fullname: '',
      phone: '',
      email: '',
      massage:''
   })
   
   const InputEvent = (event)=>{
        const {name,value} = event.target;
        
        setData((preVal)=>{
         return{
         ...preVal,
         [name]:value
         }
        });
   }

   const formSubmit = (e)=>{
      e.preventDefault();
         alert(`Your name is ${data.fullname} Your mob no. is ${data.phone} Your Email Id is ${data.email} and you typed this massage ${data.massage} `)
   }


   
   return (
        <>
           <section className='contact'>
           <h3 className='heading'>contact us</h3>
               <div className='container'>
                 <div className='full_wrapper'>
                  <div className='contact_wrapper'>
                     
                     <div className='left_s'>
                        <img src={img} alt='something went wrong' />
                     </div>
                    
                    <form onSubmit={formSubmit} className='right_s'>
                       <label>fullname</label>
                       <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} placeholder='Enter your name' required />
                       <label>Phone</label>
                       <input type='number' name='phone' value={data.phone} onChange={InputEvent} placeholder='Mobile Number' required />
                       <label>email</label>
                       <input type='email' name='email' value={data.email} onChange={InputEvent} placeholder='angry_coder@example.com' required />
                       <label>Massage</label>
                       <textarea rows='4' name='massage' value={data.massage} onChange={InputEvent} placeholder='Massage' />
                       <button >submit now</button>
                    </form>

                  </div>
               </div>
           </div>
           </section>
        </>
    )
}

export default Contact
