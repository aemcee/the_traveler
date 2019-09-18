import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiTest from './api_test';
import Display from './display';
import Landing from './landing';
import Upload from './upload';

const App = () => (
    <div className="app">
        <h1 className="text-center">The Traveler</h1>
        <Route path="/" exact component={Landing}/>
        <Route path="/display" component={Display}/>
        <Route path="/upload" component={Upload}/>
        <ApiTest/>
    </div>
);

export default App;
