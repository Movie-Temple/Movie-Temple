
import './App.css';

import Navbar from './components/navigation/Navbar'
import './components/navigation/navbar.css'


import './components/tabs.css';
import Tabs from './components/Tabs';

import movieDb from './components/movieDb';
import ApiTemplates from './components/ApiTemplates'
import SideScroller from './components/SideScroller';




function App() {





  return (

   
    <div className="App">
      
    <Navbar />
    <Tabs />
    <SideScroller titles={movieDb[0]}/>
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