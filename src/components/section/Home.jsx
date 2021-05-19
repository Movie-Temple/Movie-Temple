import React, { Component } from 'react'


import '../tabs/tabs.css'
import { AppBar, Tabs, Tab } from '@material-ui/core';

const Home = () => {
   
        return (
            <div>
                <AppBar position="static">

                    <Tabs>
                        <Tab label="Dumpling" />
                        <Tab label="Doggy" />
                        <Tab label="Taipei" />
                    </Tabs>

                </AppBar>


            </div>
        )
    
}

export default Home;