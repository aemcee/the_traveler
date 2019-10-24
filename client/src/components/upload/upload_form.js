import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'; 
import {connect} from 'react-redux';

// class UploadForm extends Component {
//     constructor(props){
//         super(props);
//         const {handleSubmit} = this.props;
//     }

//     // const image = {
//     //     url: 'https://www.france-justforyou.com/sites/files/styles/header_image_large/public/image/page/france-just-for-you-mont_st_michael.jpg?itok=vNph3dCX',
//     //     title: 'TestFromWebsite',
//     //     userId: 3,
//     //     lat: 2,
//     //     lng: 2
//     // };

//     // description: "Test of posting image"
//     // lat: 7
//     // lng: 7
//     // pid: "67b58725-e807-11e9-a3fb-0242ac120002"
//     // title: "Upload Test4"
//     // url: "https://image.shutterstock.com/image-vector/programming-banner-coding-best-languages-260nw-1033853617.jpg"
//     // userId: 123

//     // console.log('state passed in:', props);

//     async sendPictures(sendData){
//         const resp = await axios.post('/api/display/test', sendData);
//         console.log('Payload to db: ', resp); 
//     };

//    newSubmit = (e) => {
//             e.preventDefault(); 
//             console.log('prevented submit', this.props); 
//     }
    
    
//     render(){

//         return (
//             <form onSubmit={this.handleSubmit}>
//             {/* <form onSubmit={this.newSubmit}> */}
//                 <div>
//                     <label htmlFor="url">URL</label>
//                     <Field name="url" component="input" type="text"/>
//                 </div>
//                 <div>
//                     <label htmlFor="title">Title</label>
//                     <Field name="title" component="input" type="text"/>
//                 </div>
//                 <div>
//                     <label htmlFor="userId">userId</label>
//                     <Field name="userId" component="input" type="text"/>
//                 </div>
//                 <div>
//                     <label htmlFor="lat">Latitude</label>
//                     <Field name="lat" component="input" type="text"/>
//                 </div>
//                 <div>
//                     <label htmlFor="lng">Longitude</label>
//                     <Field name="lng" component="input" type="text"/>
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         )
//     }
// }

// UploadForm = reduxForm({
//     form: 'upload',
//     enableReinitialize: true,
// })(UploadForm);

// function mapStatetoProps(state, props){
//     return{
//         handleSubmit: props.handleSubmit
//     }
// };

// export default connect(mapStatetoProps, {

// })(UploadForm); 


let UploadForm = props => {
    const {handleSubmit, reset} = props; 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="url">URL</label>
                <Field name="url" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <Field name="title" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="userId">userId</label>
                <Field name="userId" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="lat">Latitude</label>
                <Field name="lat" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="lng">Longitude</label>
                <Field name="lng" component="input" type="text"/>
            </div>
            <div className="modal-footer">
                <button className="btn btn-primary" type="submit">Submit</button>
                <button onClick={reset} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
        </form>
    )
}

UploadForm = reduxForm({
    form: 'upload',
    enableReinitialize: true
})(UploadForm); 

export default UploadForm