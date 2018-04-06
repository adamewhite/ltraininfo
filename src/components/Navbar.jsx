import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    return (
          <header>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item nav__item--margin-left-auto">
                  <NavLink className="nav__link" to="/about" activeClassName="active">Why, MTA?</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/gettingaround" activeClassName="active">What to do</NavLink>
                </li>
              </ul>

              <ul className="nav__list--logo">
                <li className="nav__item--logo">
                 <NavLink className="nav__link nav__link--logo" to="/" activeClassName="active"><p className="nav__link__title">L TRAIN INFO</p></NavLink>
                </li>
              </ul>

              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink className="nav__link" to="/news" activeClassName="active">The news</NavLink>
                </li>
                <li className="nav__item nav__item--margin-right-auto">
                  <NavLink className="nav__link" to="/contact" activeClassName="active">Contact us</NavLink>
                </li>
              </ul>
            </nav>
          </header>
      );
  }
}

export default Navbar;

