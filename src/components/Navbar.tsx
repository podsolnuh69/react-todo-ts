import React from 'react';

const Navbar: React.FC = () => {
    return  <nav>
                <div className="nav-wrapper grey darken-4">
                    <h4 className="nav-title">ToDo on React + TypeScript</h4>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Список дел</a></li>
                        <li><a href="badges.html">Информация</a></li>
                    </ul>
                </div>
            </nav>
          
}

export default Navbar;