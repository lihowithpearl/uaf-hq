import './App.css';
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import Nav from './sematics/navigationbar/nav.js';
import {Routes,Route,BrowserRouter as Router, useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

 console.log(window.location.pathname);
  return (
    <div>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/login" element={<Login/>}/>  
        </Routes>
              
    
    </div>    

    
  );
}

export default App;
