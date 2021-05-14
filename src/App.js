import React from 'react';
import logo from './MTLogoPerspTrans.png';
import { Counter } from './features/counter/Counter';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <p>whaddup yall</p> */}
      <img src={logo}></img>
    
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