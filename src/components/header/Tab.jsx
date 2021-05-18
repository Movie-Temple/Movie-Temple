import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Tab extends Component {
    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return (
             <section id='tabsBar'>
                <ul className={toggle ? "toggle" : "tabWrapper"}>
                    <li id='tab1' className='tab'><Link  to="/Movies" >Movies</Link></li>
                    <li id='tab2' className='tab'><Link to="/Watch">Watchlist</Link></li>
                    <li id='tab3' className='tab'><Link to="/Rent">Rented</Link></li>
                    <li id='tab4' className='tab'><Link to="/Purchase">Purchased</Link></li>
                    
                </ul>
               
            </section>
        )
    }
}

export default Tab