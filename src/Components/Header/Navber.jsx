import React from 'react';
import { NavLink, useNavigation } from 'react-router-dom';
import './Navbar.css';

const Navber = () => {
  const navigation = useNavigation(); // Hook to track navigation state

  return (
    <div className="navbar bg-base-100 shadow-sm px-5 sticky top-0 z-9999">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/" className="link link-hover">
              Home
            </NavLink>
            <NavLink to="/about" className="link link-hover">
              My-Bookings
            </NavLink>
            <NavLink to="/blogs" className="link link-hover">
              Blogs
            </NavLink>
            <NavLink to="/contact" className="link link-hover">
              Contact
            </NavLink>
          </ul>
        </div>
        <img
          className="h-7"
          src="https://i.ibb.co.com/wF4C3hG3/logo.png"
          alt="logo"
        />
        <a className="pl-2 text-3xl font-bold">Phudu</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-xl">
          <NavLink to="/" className="link link-hover">
            Home
          </NavLink>
          <NavLink to="/about" className="link link-hover">
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className="link link-hover">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="link link-hover">
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-fuchsia-600 text-white rounded-3xl">Emergency</a>
      </div>

      {navigation.state === 'loading' && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white"></div>
        </div>
      )}
    </div>
  );
};

export default Navber;