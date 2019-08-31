import React, {Component} from 'react';
import axios from 'axios';

class ApiTest extends Component {

    // Lifecycle method 
    async componentDidMount(){

        const user = {
            name: 'Jim Bob',
            email: 'jim@test.com',
            phone: '909 909 5555'
        };

        const resp = await axios.post('/api/test', user);

        console.log('POST Response:', resp); 

        const getResp = await axios.get('/api/test');

        console.log('GET API Result:', getResp);
    };

    render(){
        return(
            <div>
                <h1 className='text-center text-danger'>API Test</h1>
            </div>
        );
    };
};

export default ApiTest; 