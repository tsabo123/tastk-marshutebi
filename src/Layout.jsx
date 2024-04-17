import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import OffCanvasExample from './OffCanvasExample'; // Assuming the OffCanvasExample component is in the same directory

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <ul className="navbar" style={{ listStyleType: 'none', padding: 0 }}>
          <span style={{ marginRight: '10px' }}>
            <Link to="Logo">Typology</Link>
          </span>
          <span style={{ marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </span>
          <span style={{ marginRight: '10px' }}>
            <Link to="/Layouts">Layouts</Link>
          </span>
          <span style={{ marginRight: '10px' }}>
            <Link to="/Post">Post</Link>
          </span>
          <span style={{ marginRight: '10px' }}>
            <Link to="/Page">Page</Link>
          </span>
          <span style={{ marginRight: '10px' }}>
            <Link to="/Archives">Archives</Link>
          </span>
          <span style={{ marginRight: '10px' }}>
            <Link to="/Featured">Featured</Link>
          </span>
          <span>
            <OffCanvasExample name="OffCanvas" />
          </span>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
