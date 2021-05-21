import React from 'react'
import HeadBar from './header/HeadBar';
import Career from '../Career';
import Policy from '../Policy';
import FAQ from '../FrequentlyAskedQuestions';
import AboutUs from '../AboutUs';
import Home from '../section/Home';
import Search from '../section/Search';
import Support from '../Support';
import Account from './contents/account/Account';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Footer from './footer/Footer';
import MovieDetails from '../MovieDetails';



const WebsiteRoute = () => {
  return (

    <Router>
        <div>
            <HeadBar />
        </div>
        <Switch>


            <Route exact path="/Account">
                <Account />
            </Route>

            <Route exact path="/Search">
                <Search />
    
            </Route>

    
            <Route exact path="/AboutUs">
                <AboutUs />
            </Route>

            <Route exact path="/Support">
                <Support />
            </Route>
            <Route exact path="/Career">
                <Career />
            </Route>
            <Route exact path="/Policy">
                <Policy />
            </Route>
            <Route exact path="/FAQ">
                <FAQ />
            </Route>
            <Route path='/moviedetails'>
                <MovieDetails />
            </Route>
    
            <Redirect exact from="/" to="/Home/Categories" />

            <Route exact path="/Home/:page?" render={props => <Home {...props} />} />
      

        </Switch>
      <div>
                <Footer />
      </div>
        
    </Router>
  )

}

export default WebsiteRoute;

