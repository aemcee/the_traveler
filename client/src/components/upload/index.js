import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    return (
        <div className="upload-page">
            <h1>Welcome to the Upload Page</h1>
            <ul>
                <li><Link to="/">To Landing Page</Link></li>
                <li><Link to="/display">To Display Page</Link></li>
            </ul>
        </div>
    )
}