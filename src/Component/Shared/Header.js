import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link className="text-violet-500" to="/">
          Over View
        </Link>
      </li>
      <li>
        <Link className="text-violet-500" to="/spece">
          Speces
        </Link>
      </li>
      <li>
        <Link className="text-violet-500" to="/blogs">
          FAQs
        </Link>
      </li>
      {/* {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
    
          {user ? (
            <button onClick={logOut} className="btn btn-active btn-ghost">
              Logout
            </button>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>{user && <p>{user.displayName}</p>}</li> */}
    </>
  );
  return (
    <div class="navbar sticky top-0">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div class="navbar-end mx-10">
        <span className="mx-4 text-purple-500 text-xl">Order for $249</span>
        <a class="btn btn-primary">Pre Order</a>
      </div>
    </div>
  );
};

export default Header;
