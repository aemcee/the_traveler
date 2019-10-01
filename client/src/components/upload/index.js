import React from 'react';
import {Link} from 'react-router-dom';
import './upload.scss';

export default props => {
    return (
        <div className="upload-page">
            <h1 className="text-center">Welcome to the Upload Page</h1>
            <div className="upload-container container col-10">
                <div className="searchbar col-xl-3 offset-xl-6 col-lg-4 offset-lg-5 col-md-5 offset-md-3 col-sm-3 offset-sm-2 col-3">
                    <form className="form-group col-12">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Input URL" aria-label="Input URL"/>
                            <div className="input-group-append">
                                <Link className="search-btn btn btn-outline-secondary" to="/display">Upload</Link>
                                {/* <button className="search-btn btn btn-outline-secondary" type="button">Search</button> */}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="upload-outline row">
                    <h2>Drag your files here to upload</h2>
                </div>
            </div>
        </div>
    )
}