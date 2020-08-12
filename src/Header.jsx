import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Header.scss'


export function Header() {
    return (<React.Fragment>
        <nav className="header">
            <div className="header__contents">
                <h1 className="header__title">
                    <Link to="/">Kevinneedsanapp.com</Link>
                </h1>

                <ul className="header__nav">
                    <li className="header__nav-item">
                        <NavLink
                            to="/"
                            exact
                            activeClassName="header__nav-item--active"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            to="/users/"
                            activeClassName="header__nav-item--active"
                        >
                            Users
                        </NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink
                            to="/computers/"
                            activeClassName="header__nav-item--active"
                        >
                            Computers
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </React.Fragment>);
}