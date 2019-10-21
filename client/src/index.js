import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

=======
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
>>>>>>> port-comp-to-jsx
import App from './components/app';

const store = createStore(rootReducer);

ReactDOM.render(
<<<<<<< HEAD
    <App />,
=======
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
>>>>>>> port-comp-to-jsx
    document.getElementById('root')
);
