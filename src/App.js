import './App.css';
import WebsiteRoute from './components/website/WebsiteRoute'

//import ApiTemplates from './components/ApiTemplates'
//import Navbar from './components/navigation/Navbar';
import './components/navigation/navbar.css';
//import ApiTemplates from './components/ApiTemplates';
//import SideScroller from './components/SideScroller';
import titles from './components/movieDb';
import { useState, useEffect } from 'react';
import getMovie from './components/api'
import { useDispatch, useSelector } from 'react-redux';
import {addMovies} from './features/movies';



function App() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  


  useEffect(() => {
    const fetchAll = async () => setMovies(
      await Promise.all(titles.map(getMovie))
        
    );
    fetchAll();
    
  }, [])

  useEffect(() => {
    dispatch(addMovies(movies))
    
  }, [movies, dispatch])

  return (
  
    <div className="App">
      <WebsiteRoute />
    </div>

  );
}

export default App;

