import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './rootLayout.css';
import Footer from '../components/footer';

function RootLayout() {
  return (
    <div className="container-fluid border border-danger bg">
      <header>
        <ul className="nav justify-content-end w-100 navbar">
        <h1 className='h1 text-white position-fixed course-h1'><b><a href="/" className='rootlayout-h1'>Bilim Najot</a></b></h1>

          <li className="nav-item text-uppercase color-red text-danger text-white">
            <NavLink to="/" className="nav-link" ClassName="" aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item text-uppercase color-red text-danger text-white">
            <NavLink to="/courses" className="nav-link" ClassName="" aria-current="page">Kurslar</NavLink>
          </li>
          <li className="nav-item text-uppercase color-red text-danger text-white">
            <NavLink to="/about" className="nav-link" ClassName="" aria-current="page">A'loqa</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet></Outlet>
        <Footer></Footer>

      </main>
    </div>
  );
}

export default RootLayout;
