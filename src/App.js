import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Home />
    </div>
  );

}

export default App;