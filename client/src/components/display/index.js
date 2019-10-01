import React from 'react';
import {Link} from 'react-router-dom'; 
import Pictures from './pictures.js';
import "./display.scss";

export default props => {
    return (
        <div className="display-page">
            <h1 className="text-center">Welcome to the Display Page</h1>
            <div className="container col-10">
                <div className="imageContainer row">
                    {/* took out d-flex for testing */}
                    <div className="justify-content-center d-flex col-xl-3 col-lg-4 col-md-6 col-sm-6 my-3">
                        <div className="pic background-image pup1"></div>
                    </div>
                    <div className="justify-content-center d-flex col-xl-3 col-lg-4 col-md-6 col-sm-6 my-3">
                        <div className="pic background-image pup2"></div>
                    </div>
                    <div className="justify-content-center d-flex col-xl-3 col-lg-4 col-md-6 col-sm-6 my-3">
                        <div className="pic background-image pup3"></div>
                    </div>
                    <div className="justify-content-center d-flex col-xl-3 col-lg-4  col-md-6 col-sm-6 my-3">
                        <div className="pic background-image pup5"></div>
                    </div>
                    <Pictures/>
                </div>
            </div>
        </div>
    )
}