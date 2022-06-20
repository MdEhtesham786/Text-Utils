import React from 'react'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={props.palleteBg}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.link}</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className={`dropdown-menu bg-black bg-${props.bgColor}`} aria-labelledby="navbarDropdown" >
                                <li><a className={`dropdown-item text-${props.txtColor}`} href="/">Action</a></li>
                                <li><a className={`dropdown-item text-${props.txtColor}`} href="/">Another action</a></li>
                                <li><hr className={`dropdown-divider text-${props.txtColor}`} /></li>
                                <li><a className={`dropdown-item text-${props.txtColor}`} href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'>Disabled</a>
                        </li>
                    </ul>
                    {/* <div className="pallete mx-2" style={props.palleteStyle} >
                        <div className="form-check mx-2 radio">
                            <input className="form-check-input blackRadio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={props.handleOnChangePallete} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Black
                            </label>
                        </div>
                        <div className="form-check mx-2 radio">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={props.handleOnChangePallete} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Purple
                            </label>
                        </div>
                        <div className="form-check mx-2 radio">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={props.handleOnChangePallete} />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Brown
                            </label>
                        </div>
                        <div className="form-check mx-2 radio">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onChange={props.handleOnChangePallete} />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Dark blue
                            </label>
                        </div>
                    </div> */}
                    <div className={`form-check form-switch text-${props.txtColor}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
