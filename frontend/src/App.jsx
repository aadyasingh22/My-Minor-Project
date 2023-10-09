import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AddHandicraft from './components/AddHandicraft';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div>

      <BrowserRouter>

      <Navbar />
      
      <Routes>

        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <AboutUs/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/addhandicraft' element={ <AddHandicraft/> } />

      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
