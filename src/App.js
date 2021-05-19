
import './App.css';

import Navbar from './components/navigation/Navbar'
import './components/navigation/navbar.css'
import movieDb from './components/movieDb';
import ApiTemplates from './components/ApiTemplates'

import { Tab, Tabs, AppBar } from '@material-ui/core'


function App() {

  return (

   
    <div className="App">
      
      <h2> Welcome </h2>
      <AppBar position="static">

        <Tabs>
          <Tab label="Dumpling"/>
          <Tab label="Doggy"/>
          <Tab label="Taipei"/>
        </Tabs>

      </AppBar>
    

    </div>

  );
}

export default App;


/*
<Navbar />
*/


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