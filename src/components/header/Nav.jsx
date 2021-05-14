import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../MTLogoPerspTrans.png'



export class Nav extends Component {
    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
            <>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/Search">Search</Link></li>
                    <li><Link to="/"><img src={Logo}></img></Link></li>
                    <li><Link to="/Log">Login / Register</Link></li>
                    
                </ul>
               
            </>
        )
    }
}

export default Nav