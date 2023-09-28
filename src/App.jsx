import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Order from './pages/Order'
import Signup from './pages/Signup'
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
