
import './App.css';

import Navbar from './components/navigation/Navbar'
import './components/navigation/navbar.css'


import './components/tabs.css';
import Tabs from './components/Tabs';

import movieDb from './components/movieDb';
import ApiTemplates from './components/ApiTemplates'




function App() {





  return (

   
    <div className="App">
      {/* <p>whaddup yall</p> */}
      
    <Navbar />
   
    </div>
   


    <Tabs />

    <div className="App">

      <ApiTemplates title= {movieDb[0]}/>

    </div>


  );
}

export default App;


// JJ: To show the sign up view:
/* <AuthProvider> 
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      
      </Container>
    </AuthProvider>

    */