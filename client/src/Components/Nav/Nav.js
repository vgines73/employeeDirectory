import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Breh
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/directory"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Directory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav
