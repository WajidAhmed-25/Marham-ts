import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/register';
import Login from './components/login/login';
import DoctorRegister from './components/DoctorSignUp/DoctorSignUp';

function App() {
  return (
<div className="Marham-app">
      

<Router>
<Navbar />
<DoctorRegister/>
      <Routes>
      {/* <Route path="/" element={<Register/>} />  */}
     <Route path="/login" element={<Login />} />
     <Route path='/register' element={<Register/>}/> 
      </Routes>
    </Router>




</div>



  );
}

export default App;

