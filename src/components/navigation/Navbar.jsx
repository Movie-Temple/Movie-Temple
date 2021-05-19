import React from 'react'
import Header from '../../components/Header'
import Section from '../../components/Section'
import {BrowserRouter as Router} from 'react-router-dom'

class Navbar extends React.Component{
    render() {

    return (
        <Router>
            <div>
                <Header />
                <Section />
            </div>
        </Router>
    )
}
}

export default Navbar;
