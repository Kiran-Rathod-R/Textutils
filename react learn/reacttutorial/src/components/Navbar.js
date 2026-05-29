import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (

        <nav
            className={`navbar navbar-expand-lg bg-${props.navColor} shadow-sm py-3`}
        >

            <div className="container-fluid">

                {/* LOGO */}

                <Link
                    className={`navbar-brand fw-bold fs-3 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}
                    to="/"
                >
                    {props.title}
                </Link>

                {/* TOGGLER */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* NAVBAR CONTENT */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item mx-2">

                            <Link
                                className={`nav-link ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}
                                to="/"
                            >
                                Home
                            </Link>

                        </li>

                        <li className="nav-item mx-2">

                            <Link
                                className={`nav-link ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}
                                to="/about"
                            >
                                {props.aboutText}
                            </Link>

                        </li>

                    </ul>

                    {/* COLOR BUTTONS */}

                    <button
                        className="btn btn-danger mx-1"
                        onClick={() => {props.changeNavColor('danger');
      
                            props.changebodyCol('#78082b');
                        }
                    }  
                    >
                        Red
                    </button>

                    <button
                        className="btn btn-success mx-1"
                        onClick={() =>{ props.changeNavColor('success');
                             props.changebodyCol('#105c13');
                        }}
                    >
                        Green
                    </button>

                    <button
                        className="btn btn-primary mx-1"
                        onClick={() => {props.changeNavColor('primary')
                             props.changebodyCol('#10299a');
                        }}
                    >
                        Blue
                    </button>




                    {/* DARK MODE SWITCH */}

                    <div
                        className={`form-check form-switch mx-4 text-${props.mode === 'light' ? 'text-dark' : 'text-white'}`}
                    >

                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            onClick={props.toggleMode
                                
                            }
                        />

                        <label className="form-check-label">
                            Dark Mode
                        </label>

                    </div>

                </div>

            </div>

        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
};

Navbar.defaultProps = {
    title: 'ReactApp',
    aboutText: 'About Us'
};