import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../MTLogoPerspTrans.png'
import './nav.css';

const Nav = () => {

    return (
        <div className='nav'>
            <p className='nav-search-link'><Link to="/Search">Search</Link></p>
            <p className='nav-logo-link'><Link  to="/"><img src={Logo}></img></Link></p>
            <p className='nav-login-link'><Link to="/Log">Sign In</Link></p>
        </div>
    )
}

export default Nav;

/* can be deleted? Elmirs code? /Emelie
    const {toggle} = this.state;    
    
    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

*/