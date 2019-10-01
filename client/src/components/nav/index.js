import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import Logo from '../../assets/images/Bobomb.png';

export default props => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="d-flex align-items-center header-container container col-12">
                <div className="header-bar col-12 align-items-center row">
                    <div className="col-1">
                        <Link className="logo navbar-brand d-block" to="/">
                            <img src={Logo} width="30" height="30" className="d-inline-block" alt="Logo"/>
                            The Traveler
                        </Link>
                    </div>
                    <div className="searchbar col-xl-3 offset-xl-6 col-lg-4 offset-lg-5 col-md-5 offset-md-3 col-sm-3 offset-sm-2 col-3">
                        <form className="form-group col-12">
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <Link className="search-btn btn btn-outline-secondary" to="/display">Search</Link>
                                    {/* <button className="search-btn btn btn-outline-secondary" type="button">Search</button> */}
                                </div>
                            </div>
                        </form>

                        {/* <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                        </div> */}
                    </div>
                    <div className="navbar-brand d-none d-sm-block navbar-nav mr-0 mt-lg-0 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div className="row user_buttons">
                            <div className="justify-content-center d-flex col-6 px-0 mx-0">
                                <Link className="btn btn-primary" to="/upload">Upload</Link>
                            {/* <button type="button" className="btn btn-primary">Upload</button> */}
                            </div>
                            <div className="justify-content-center d-flex col-6 px-0 mx-0">
                                <button type="button" className="btn btn-primary">Sign Out</button>
                            </div>
                        </div>
                    </div> 
                    {/* <div className="navbar-brand"></div> */}
                        <button className="navbar-toggler navbar-light bg-light drop-down" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo0" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                </div>                 
            </div>
                
            <div className="collapse navbar-collapse" id="navbarTogglerDemo0">
                
                <ul className="d-block d-sm-none navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                    {/* <Link to="/upload"><a className="nav-link" href="#">Upload</a></Link> */}
                    <Link className="nav-link" to="/upload">Upload</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Out</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}