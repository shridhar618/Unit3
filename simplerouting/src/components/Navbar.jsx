import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navBar" style={pageStyle}>

        <span className='Home'>
          <Link to="/">Home</Link></span>
        <span className='AboutUs'>
          <Link to="/AboutUs">About Us</Link></span>
        <span className='Contact'>
          <Link to="/Contact">Contact</Link></span>

      </div>
    </nav>
  );
}



const pageStyle = {
  backgroundColor: 'maroon',
  color: 'white',
  padding: '10px'
};


export default Navbar;