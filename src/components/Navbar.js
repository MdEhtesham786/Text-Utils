import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={props.navbarStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Text-Utils/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Text-Utils/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Text-Utils/about">{props.link}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className={`dropdown-menu bg-black bg-${props.bgColor}`} aria-labelledby="navbarDropdown" >
                                <li><Link className={`dropdown-item text-${props.txtColor}`} to="/Text-Utils/">Action</Link></li>
                                <li><Link className={`dropdown-item text-${props.txtColor}`} to="/Text-Utils/">Another action</Link></li>
                                <li><hr className={`dropdown-divider text-${props.txtColor}`} /></li>
                                <li><Link className={`dropdown-item text-${props.txtColor}`} to="/Text-Utils/">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.txtColor}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
