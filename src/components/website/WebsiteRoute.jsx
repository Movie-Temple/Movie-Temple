import React from 'react'
import HeadBar from './header/HeadBar';
import Career from './contents/footerContents/Career';
import Policy from './contents/footerContents/Policy';
import FAQ from './contents/footerContents/Faq';
import AboutUs from './contents/footerContents/AboutUs';
import Home from './contents/home/Home';
import Search from './contents/search/Search';
import Support from './contents/footerContents/Support';
import AccountContainer from './contents/account/AccountContainer';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
//import {Link} from 'react-router-dom';
import Footer from './footer/Footer';
import MovieDetails from './contents/movieContent/MovieDetails';




const WebsiteRoute = () => {
  return (

    <Router>
        <div>
            <HeadBar />
        </div>
        <Switch>


            <Route exact path="/Account">
                <AccountContainer />
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

    </Router>);
}

export default WebsiteRoute;

