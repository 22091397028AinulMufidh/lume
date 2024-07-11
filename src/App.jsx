import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css'
import Home from './Pages/Home.jsx'
import Course from './Pages/Course.jsx'
import Content from './Pages/Content.jsx'
import Notfound from './Pages/Notfound.jsx' 
import Form from './Pages/Form.jsx'
import Login from './Pages/Login.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/content' element={<Content/>} />
        <Route path='*' element={<Notfound/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
