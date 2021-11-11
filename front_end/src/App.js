import FormExampleForm from "./Form.js";
import './App.css';
import {Home} from './Components/Home';
import {Expenses} from './Components/Expenses';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <div> 
      
      <Routes>
     

      <Route path='/' component={FormExampleForm} exact />
      <Route path='/home' component={Home} />
      <Route path='/expenses' component={Expenses} />
      
    
      </Routes>
    
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

