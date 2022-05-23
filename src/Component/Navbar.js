import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row justify-content-between">
                <div className='d-flex flex-row text-decoration-none'>
                    <div class="p-2"><Link to="/" className='text-decoration-none'>Conference</Link></div>
                    <div class="p-2"><Link to="/" className='text-decoration-none'>Home</Link></div>
                </div>
                <div class="p-2"><Link to="login" className='text-decoration-none'>Login</Link></div>
            </nav>
        </div>
    );
}

export default Navbar;