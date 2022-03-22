import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Images/logo.png";
// import useFirebase from "../../Hooks/useFirebase";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
    // const { user, signout, userName } = useAuth();
    const { user, logout, admin } = useAuth();
    // const { user, signout } = useFirebase();
    return (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="top-info">
                                <i className="far fa-envelope"></i>
                                <p>info@docfind.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="top-info">
                                <i className="fal fa-map-marker-alt"></i>
                                <p>Khalishpur, Khulna, Bangladesh</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="social">
                                <li>
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                                <li>
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter"></i>
                                </li>
                                <li>
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation container shadow bg-body rounded">
                <nav className="navbar navbar-expand-lg  navbar-light">
                    <div className="container-fluid">
                        <span className="navbar-brand">
                            <img src={logo} alt="logo" />
                        </span>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/">Home</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/about">About</NavLink>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/doctors">
                                            All Doctors
                                        </NavLink>
                                    </span>
                                </li>
                                {/* <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/admindashboard">
                                            AdminDashboard
                                        </NavLink>
                                    </span>
                                </li> */}
                                {admin && (
                                    <>
                                        <li className="nav-item">
                                            <span className="nav-link">
                                                <NavLink
                                                    className="hover-link"
                                                    to="/admindashboard"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </span>
                                        </li>
                                    </>
                                )}
                                {user.email && !admin && (
                                    <>
                                        <li className="nav-item">
                                            <span className="nav-link">
                                                <NavLink
                                                    className="hover-link"
                                                    to="/userdashboard"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </span>
                                        </li>
                                    </>
                                )}
                                {/* <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/userdashboard">
                                            UserDashboard
                                        </NavLink>
                                    </span>
                                </li> */}
                                {/* <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/booking">Booking</NavLink>
                                    </span>
                                </li> */}
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <NavLink to="/contact">
                                            Contact Us
                                        </NavLink>
                                    </span>
                                </li>

                                {!user?.email && (
                                    <li className="  nav-item button">
                                        <NavLink to="/signin">
                                            <span className="nav-link login-nav btn btn-primary">
                                                SignIn
                                            </span>
                                        </NavLink>
                                    </li>
                                )}
                                {!user?.email && (
                                    <li className="nav-item button">
                                        <NavLink to="/signup">
                                            <span className="nav-link btn btn-warning signup-nav">
                                                SignUp
                                            </span>
                                        </NavLink>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <span className="nav-link">
                                        {user?.email && (
                                            <h5>
                                                {user?.displayName
                                                    ? user?.displayName
                                                    : "Anonymous"}
                                            </h5>
                                        )}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    {user?.email && (
                                        <button
                                            onClick={logout}
                                            className="btn btn-danger"
                                        >
                                            Log Out
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
