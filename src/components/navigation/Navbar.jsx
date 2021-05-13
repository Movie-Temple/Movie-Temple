import React from 'react'
import Logo from '../../MTLogoPerspTrans.png'


const Navbar = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    
                </div>
                <ul> 
                    <li><a href="/" className="search">Search</a></li>
                    <li><a href="/" className="mtlogo"> <img src={Logo}/> </a></li>
                    <li><a href="/" className="login" >Login / Register</a></li>
                </ul>
            </header>
            <section>

            </section>
        </div>
    )
}

export default Navbar
