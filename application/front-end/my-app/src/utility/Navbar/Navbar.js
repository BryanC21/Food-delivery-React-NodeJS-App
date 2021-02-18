import React from "react";
import { NavLink } from "react-router-dom";
import T5Logo from "../../images/logos/T5_logo.svg";
import { smoothScrolling } from "../../js/smoothScrolling";

function Navbar() {
  return (
    <nav className='navbar primary-background'>
      {smoothScrolling()}
      <div className='container'>
        <header className='nav-logo'>
          <img src={T5Logo} alt='team5_logo' />
        </header>
        <ul className='nav-links flex-row justify-end '>
          <li className='padding-left'>
            <NavLink
              activeStyle={{ borderBottom: "1px solid white" }}
              className='white-color font-sm'
              exact
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-button flex'>
            <a
              className=' white-color primary-background font-sm'
              href='#about-team'
            >
              About Team
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
