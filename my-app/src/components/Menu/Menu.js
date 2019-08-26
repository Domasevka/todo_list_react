import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Menu extends Component {
  render() {
    return (
      <div>
        <Link className="menu__link" to="/">Main</Link>
        <Link className="menu__link" to="/catalogue">Catalogue</Link>
        <Link className="menu__link" to="/todo">To do</Link>
      </div>
    );
  }
}

export default Menu;
