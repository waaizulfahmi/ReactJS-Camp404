import React from "react";
import logo from "../assets/google.png";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" srcset="" width="65px"  /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-Link active ms-3" aria-current="page">Beranda</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manajemen-buku"  className="nav-Link ms-3" >Manajemen Buku</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;