import React from 'react'
import TabsSection from '../../components/TabsSection'
import {BrowserRouter as Router} from 'react-router-dom'

class Tabs extends React.Component{
    render() {

    return (
        <Router>
            <div>
                <TabsSection />
            </div>
        </Router>
    )
}
}

export default Tabs
