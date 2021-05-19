import React, { Component } from 'react'
import { useState } from 'react';

import '../tabs/tabs.css'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Categories from '../Categories';
import Purchased from '../Purchased';
import Rented from '../Rented';
import WatchList from '../Watchlist';

const Home = () => {
        const [selectedTab, setSelectedTab] = useState(0);
        const handleChange = (event, newValue) => {
            setSelectedTab(newValue);
        };

        return (
            <div>
                <AppBar position="static">

                    <Tabs value={selectedTab} onChange={handleChange}>
                        <Tab label="Categories" />
                        <Tab label="Purchased" />
                        <Tab label="Rented" />
                        <Tab label="Watch List" />
                    </Tabs>

                </AppBar>
                {selectedTab === 0 && <Categories />}
                {selectedTab === 1 && <Purchased />}
                {selectedTab === 2 && <Rented />}
                {selectedTab === 3 && <WatchList />}

            </div>
        )
    
}

export default Home;