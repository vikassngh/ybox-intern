import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <h1>YBOX</h1>
            <section>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">POSTS</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
