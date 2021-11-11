import FormExampleForm from "./Form.js";
import './App.css';
import {Home} from './Home';

import {Projects} from './Projects'

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <div> 
      
      <Routes>
      <Route path='/' component={FormExampleForm} />
      <Route path='/home' component={Home} />
      <Route path='/projects' component={Projects} />
      
    
      </Routes>
    
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

