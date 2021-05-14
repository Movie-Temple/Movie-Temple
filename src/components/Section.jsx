import React, { Component } from 'react';
import Home from './section/Home'
import Log from './section/Log'
import Search from './section/Search'
import {Route} from 'react-router-dom';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact/>
                <Route path="/Log" component={Log} />
                <Route path="/Search" component={Search} />
                
                
            </section>
        )
    }
}

export default Section