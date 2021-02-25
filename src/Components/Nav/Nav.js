import React from 'react'
import { Link } from 'react-router-dom'
// component for nav wanted to add more pages, but becuase ran out of time
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                BREH
            </Link>
        </nav>
    )
}

export default Nav
