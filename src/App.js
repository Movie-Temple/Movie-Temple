
import './App.css';
import movieDb from './components/movieDb';
import ApiTemplates from './components/ApiTemplates'



function App() {





  return (
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