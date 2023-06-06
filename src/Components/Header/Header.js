import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header..css';

const Header = () => {
    return (
        <div className='Header'>
           <nav>
            <NavLink className={({isActive})=> isActive ? 'active' : undefined} to={'/home'}> Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/Products'}>Products</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/Friends'}>Friends</NavLink>
           </nav>
           <p>Common header</p>
        </div>
    );
};

export default Header;