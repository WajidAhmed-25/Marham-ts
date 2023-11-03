import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/register';
import Login from './components/login/login';

function App() {
  return (
<div className="Marham-app">
      

<Router>
<Navbar />
      <Routes>
      <Route path="/" element={<Register/>} /> 
     <Route path="/login" element={<Login />} />
     <Route path='/register' element={<Register/>}/> 
      </Routes>
    </Router>

</div>



  );
}

export default App;

