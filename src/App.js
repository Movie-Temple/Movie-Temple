
import './App.css';
import Navbar from './components/navigation/Navbar';
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
      <Navbar movies={movies}/>
    </div>

  );
}

export default App;


// JJ: To show the sign up view:
/* 

  import { Container } from 'react-bootstrap';
  import {AuthProvider} from './contexts/AuthContext';
  import Register from './components/Register';

    <AuthProvider> 
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />  * should change to <Register />
        </div>
      
      </Container>
    </AuthProvider>

    */