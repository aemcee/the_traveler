import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './upload.scss';
import UploadForm from './upload_form';
import axios from 'axios';
import {connect} from 'react-redux';

class Upload extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log('upload props', this.props); 
        // console.log('upload state', this.state); 
    };

    submit = values => {
        // console.log(arguments);
        this.sendPictures(values); 
        console.log('Upload props', values); 
        document.location.reload(true);
    };

    async sendPictures(sendData){
        const resp = await axios.post('/api/display/test', sendData);
        console.log('Payload to db: ', resp); 
    };

    render(){

        return (
            <div className="upload-page">
                <h1 className="text-center">Welcome to the Upload Page</h1>
                <div className="upload-container container col-10">
                    <div className="searchbar col-xl-3 offset-xl-6 col-lg-4 offset-lg-5 col-md-5 offset-md-3 col-sm-3 offset-sm-2 col-3">
                        {/* <UploadForm onSubmit={this.submit.bind(this)} dummyData={[1,2,3]}/> */}
                        <UploadForm onSubmit={this.submit}/>
                    </div>
                    <div className="upload-outline row">
                        <h2>Drag your files here to upload</h2>
                    </div>
                </div>
            </div>
        )
    };
}

export default Upload; 

// function mapStatetoProps(state, props){
//     return{
//         handleSubmit: props.handleFormSubmit
//     }
// }

// const mapDispatchtoProps = (dispatch) => ({
//     submit: value => dispatch(type: )
// });

// export default connect(mapStatetoProps, {

// })(Upload); 

// export default props => {

//         return (
//             <div className="upload-page">
//                 <h1 className="text-center">Welcome to the Upload Page</h1>
//                 <div className="upload-container container col-10">
//                     <div className="searchbar col-xl-3 offset-xl-6 col-lg-4 offset-lg-5 col-md-5 offset-md-3 col-sm-3 offset-sm-2 col-3">
//                         <UploadForm/>
//                         <form className="form-group col-12">
//                             <div className="input-group">
//                                 <input className="form-control" type="search" placeholder="Input URL" aria-label="Input URL"/>
//                                 <div className="input-group-append">
//                                     <Link className="search-btn btn btn-outline-secondary" to="/display">Upload</Link>
//                                     {/* <button className="search-btn btn btn-outline-secondary" type="button">Search</button> */}
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="upload-outline row">
//                         <h2>Drag your files here to upload</h2>
//                     </div>
//                 </div>
//             </div>
//         )
// }
