import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes  , Route } from 'react-router-dom';
import ContactUs from './components/Pages/ContactUs';
import Marketing from './components/Pages/Marketing';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Development from './components/Pages/Development';
import Consulting from './components/Pages/Consulting';
import Design from './components/Pages/Design';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes  >
      <Route path='/' exact Component={Home}/>
      <Route path='/contactus' exact Component={ContactUs}/>
      <Route path='/services' exact Component={Services}/>
      <Route path='/marketing' exact Component={Marketing}/>
      <Route path='/development' exact Component={Development}/>
      <Route path='/design' exact Component={Design}/>
      <Route path='/consulting' exact Component={Consulting}/>
      <Route path='/signup' exact Component={SignUp}/>
 
    </Routes>
   </Router>
  );
}

export default App;

