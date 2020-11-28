import React from 'react';

function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li className="link">
            Home
          </li>

          <li className="link">
            Gaatjes
          </li>

          <li className="link">
            Afspraak maken
          </li>

          <li className="link">
            Tanden bleken
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;