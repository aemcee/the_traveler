import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    return (
        <div className="landing-page">
            <h1>Welcome to the Landing Page</h1>
            <ul>
                <li><Link to="/display">To Display Page</Link></li>
                <li><Link to="/upload">To Upload Page</Link></li>
            </ul>
        </div>
    )
}