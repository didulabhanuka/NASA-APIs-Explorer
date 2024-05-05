import React from 'react';
import NavbarLogo from '../../images/NavbarLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-black justify-content-center align-items-center sticky-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
      <div className="navbar-brand">
        <a href="/">
          <img src={NavbarLogo} width="85" height="80" alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
