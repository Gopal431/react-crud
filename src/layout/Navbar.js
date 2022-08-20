import React from 'react'
import {Link ,NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React NavBar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to='users/add' className='btn btn-outline-light'>Add User</Link>
            </nav>
        </div>
    )
}

export default Navbar