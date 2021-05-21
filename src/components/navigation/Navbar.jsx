import React from 'react'
import Nav from './Nav';
import Career from '../../components/Career';
import Policy from '../../components/Policy';
import FAQ from '../../components/FrequentlyAskedQuestions';
import AboutUs from '../../components/AboutUs';
import Home from '../section/Home';
import Search from '../section/Search';
import Support from '../../components/Support';
import Log from '../section/Log';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import MovieDetails from '../MovieDetails';



const Navbar = () => {
  return (

    <Router>
        <div>
            <Nav />
        </div>
        <Switch>


            <Route exact path="/Log">
                <Log />
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

export default Navbar;

