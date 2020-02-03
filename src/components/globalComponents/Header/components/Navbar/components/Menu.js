import React from 'react'

export default function Menu() {
    return (
        <div id="no-padding" className="col-6 col-md-4 wow fadeInLeft d-flex justify-content-start" data-wow-duration="2s">
            <nav className="">
                <div className="d-flex hamburger">
                    <i id="bars" className="fa fa-bars"></i>
                    <p className="ml-2">MENU</p>
                </div>
                <div className="nav-links d-flex">
                    <ul className="menu-ul list-unstyled">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
