import React from 'react'
import AboutUs from '../../components/AboutUs';
import Home from '../section/Home';
import Search from '../section/Search';
import Log from '../section/Log';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from './Nav';


const Navbar = () => {
  return (

    <Router>
        <div>
            <Nav />
        </div>
        <Switch>

            <Route exact path="/AboutUs">
                <AboutUs />
            </Route>

            <Route exact path="/Log">
                <Log />
            </Route>

            <Route exact path="/Search">
                <Search />
            </Route>

            <Redirect exact from="/" to="/Home/Categories" />

            <Route exact path="/Home/:page?" render={props => <Home {...props} />} />

        </Switch>

        <div>
            <li><Link to="/AboutUs">About Us</Link></li>
        </div>
    </Router>
  )
}

export default Navbar;

/*
<Switch>
        <Route exact path="/">
          <WelcomeView />
        </Route>
        <Route path="/register">
          <RegisterView
            dataLoaded = {loaded}
            getDogData = {getDogData}
            setSelectedDog = {setSelectedDog}
          />
        </Route>
        <Route path="/info">
          <InfoView
            dataLoaded = {loaded}
            getDogData = {getDogData}
            selectedDog = {selectedDog}
          />
        </Route>
      </Switch>



      <Route exact path="" render={props => <Home {...props}/>} />
                    <Route exact path="/Search" render={props => <Search {...props}/>} />
                    <Route exact path="/Log" render={props => <Log {...props}/>} />
*/