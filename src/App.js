import React, { useState, useEffect } from 'react';
import './App.css';
import getMovie from "./components/api";
import movieDb from './components/movieDb';


function App() {


  const [movieList, setMovieList] = useState([movieDb]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovie(movieDb[0]);
      console.log(data)
    }
    fetchData();
  }, [])

  


  return (
    <div className="App">
      
    
    </div>
  );
}

export default App;
