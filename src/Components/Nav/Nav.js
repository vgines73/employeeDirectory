import React from 'react'
import { Link } from 'react-router-dom'
// component for nav wanted to add more pages, but becuase ran out of time
const styles = {
    navStyle: {
        color: "red",
        fontFamily: ['RocknRoll One', "sans-serif"]
    }
}
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <div style={styles.navStyle}>BREH</div>
            </Link>
        </nav>
    )
}

export default Nav
