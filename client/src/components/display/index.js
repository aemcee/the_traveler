import React from 'react';
import {Link} from 'react-router-dom'; 

export default props => {
    return (
        <div className="display-page">
            <h1>Welcome to the Display Page</h1>
            <ul>
                <li><Link to="/">To Landing Page</Link></li>
                <li><Link to="/upload">To Upload Page</Link></li>
            </ul>
        </div>
    )
}