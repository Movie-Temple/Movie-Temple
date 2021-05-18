import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Movies from '../components/tabsection/Movies'
import Purchase from '../components/tabsection/Purchase'
import Rent from '../components/tabsection/Rent'
import Watch from '../components/tabsection/Watch'


export class TabsSection extends Component {
    render() {
        return (
            <section>
                <Route path="/Movies" component={Movies} />
                <Route path="/Purchase" component={Purchase} />
                <Route path="/Rent" component={Rent} />
                <Route path="/Watch" component={Watch} />
                
                
            </section>
        )
    }
}

export default TabsSection