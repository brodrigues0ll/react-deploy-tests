import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/produtos">
          Produtos
        </NavLink>
      </nav >
    </>
  );
};

export default Header;