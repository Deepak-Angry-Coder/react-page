import React from 'react'
import {NavLink} from 'react-router-dom'




const Navbar = () => {
   const github ='https://github.com/Deepak-Angry-Coder'

const show_Event = ()=>{

    const show = document.getElementById('mob_');
    show.style.transform = 'translateY(7px)';
}

const hide_Event = ()=>{

    const hide = document.getElementById('mob_');
    // const linnks = document.getElementsByClassName('')
    hide.style.transform = 'translateY(-150px)';
}


    
   return (
        <>

                 <div className='hamberger_icon'>
                    <i class="fas fa-align-right mob_tri" onClick={show_Event}></i>
                 </div>

                    <div className='mob_links' id='mob_'>
                        <NavLink exact activeClassName='active_link' className='phone_linkss' onClick={hide_Event} to='/'>Home</NavLink>
                        <NavLink exact activeClassName='active_link' className='phone_linkss' onClick={hide_Event} to='/services'>Services</NavLink>
                        <NavLink exact activeClassName='active_link' className='phone_linkss' onClick={hide_Event} to='/about'>About us</NavLink>
                        <NavLink exact activeClassName='active_link' className='phone_linkss' onClick={hide_Event} to='/contact'>Contact us</NavLink>
                        <NavLink exact activeClassName='active_link' className='phone_linkss' onClick={hide_Event} to='/Search'>Search</NavLink>
                        
                        <div className='hamberger_icon'>
                          <i class="fas fa-times mob_tri" onClick={hide_Event}></i>
                        </div>
                    
                    </div>


        <section className='main_nav'>
        
          <div className='container'>
            <div className='navbars'>
                <a className='logo_links' href={github}> <i className='fab fa-teamspeak'></i>Angry_Coder</a>                    
                    <div className='navlinks'>
                        <NavLink exact activeClassName='active_link' className='linkss' to='/'>Home</NavLink>
                        <NavLink exact activeClassName='active_link' className='linkss' to='/services'>Services</NavLink>
                        <NavLink exact activeClassName='active_link' className='linkss' to='/about'>About us</NavLink>
                        <NavLink exact activeClassName='active_link' className='linkss' to='/contact'>Contact us</NavLink>
                        <NavLink exact activeClassName='active_link' className='linkss' to='/Search'>Search</NavLink>
                    </div>

            </div>
            
            </div>
        </section>
           
        </>
    )
}

export default Navbar
