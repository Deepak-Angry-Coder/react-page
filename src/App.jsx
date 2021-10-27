import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Search from './Search'
import Footer from './Footer'
import Services from './Services'


const App = () => {

    return (
        <>

        <Navbar/>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/services' component={Services} />
                <Route component={Error} />
            </Switch>
        
        <Footer/>
        </>
    )
}

export default App
