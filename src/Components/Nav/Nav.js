import React from 'react'
import { Link } from 'react-router-dom'
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
