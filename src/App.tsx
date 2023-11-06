import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import DocLogin from './components/DocLogin/DocLogin'
import DocSchedules from './components/DocSchedules/DocSchedules'
import Login from './components/login/login'
import Navbar from './components/navbar/Navbar'
import Register from './components/register/register'
import DocSignUp from './components/DocSignUp/DocSignUp'

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/DocLogin" element={<DocLogin />} />
          <Route path="/DocScheduleSlot" element={<DocSchedules />} />
          <Route path="/DocSignUp" element={<DocSignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
