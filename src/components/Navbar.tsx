import React from "react";

import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper grey darken-4">
        <h4 className="nav-title">ToDo on React + TypeScript</h4>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
