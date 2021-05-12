
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
