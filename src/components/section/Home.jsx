import React, { Component } from 'react'
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../tabs/tabs.css'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Categories from '../Categories';
import Purchased from '../Purchased';
import Rented from '../Rented';
import WatchList from '../Watchlist';

const Home = props => {

        const history = useHistory();

        const { match, hostory } = props;
        const { params } = match;
        const { page } = params;

        const tabNameToIndex = {
            0: "Categories",
            1: "Purchased",
            2: "Rented",
            3: "WatchList"
        };
        const indexToTabName = {
            Categories: 0,
            Purchased: 1,
            Rented: 2,
            WatchList: 3
        }; 

        const [selectedTab, setSelectedTab] = useState(0);
        const handleChange = (event, newValue) => {
            history.push(`/Home/${tabNameToIndex[newValue]}`);
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