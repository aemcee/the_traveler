import React, {Component} from 'react';
import axios from 'axios';
import UploadForm from '../upload/upload_form';
import Upload from '../upload';

class Pictures extends Component {
    state = {
        pictures: [],
        pid: null,
        pictureData: null
    };

    submit = values => {
        // console.log('submit values', values);
        // console.log('submit', this.state); 
        // const pid = this.state.pid.pid;
        // const editPayload = {
        //     ...values,
        //     pid
        // }
        // console.log('editPayload', editPayload); 
        console.log('MADE IT TO SUBMIT!',values);
        // this.setState({pictureData: values}); 
        // this.setState({showModal: false}); 
        // this.setState({ state: values});
        this.updatePictures(values); 
        document.location.reload(true);
    };

    // async sendPictures(sendData){
    //     const resp = await axios.post('/api/display/test', sendData);
    //     console.log('Payload to db: ', resp); 
    // };

    async updatePictures(sendData){
        const resp = await axios.patch('/api/display/update', sendData);
        console.log('Payload to db: ', resp); 
        this.getPictures(); 
    };

    picClick(value){
        // console.log('event', e.nativeEvent);
        // let nativeEvent = e.nativeEvent;
        // let eventPid = nativeEvent.target.attributes['3'].value;
        // console.log("image details", value);
        // console.log('this',this);
        this.setState({pictureData: value});

    };


    componentDidMount(){
        this.getPictures();
        // this.sendPictures();
    };


    // get pictures locally
    // async getPictures(){
    //     const data = await axios.get('/data/pic-source.json');
    //     console.log('data', data);
    //     // console.log('test', pictures); 

    //     this.setState({pictures:data.data.pictures});
    //     console.log("axios result:",this.state); 
    // };

    // get pictures from backend and database
    async getPictures(){
        const data = await axios.get('/api/display/test');
        console.log('data', data);
        // console.log('test', pictures); 

        this.setState({pictures:data.data.users});
        console.log("axios result:",this.state); 
    };

    // async sendPictures(){

    //     // {
    //     //     "id": 1,
    //     //     "url": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F789501346%2F960x0.jpg%3Ffit%3Dscale",
    //     //     "originalFileName": "",
    //     //     "title": "StMichaelFrance",
    //     //     "userId": 1,
    //     //     "pid": "",
    //     //     "createdAt": "2019-10-03T00:00:00.000Z",
    //     //     "deletedAt": "2019-10-03T00:00:00.000Z",
    //     //     "updatedAt": "2019-10-03T00:00:00.000Z",
    //     //     "description": "",
    //     //     "lat": 1,
    //     //     "lng": 1
    //     // },
    //     const image = {
    //         url: 'https://www.france-justforyou.com/sites/files/styles/header_image_large/public/image/page/france-just-for-you-mont_st_michael.jpg?itok=vNph3dCX',
    //         title: 'TestFromWebsite',
    //         userId: 3,
    //         lat: 2,
    //         lng: 2
    //     };
    
    //     const resp = await axios.post('/api/display/test', image);
    //     console.log('Payload to db: ', resp); 
    // };

    render(){
        const {pictures} = this.state;
        // console.log('render test: ', pictures.length);
        // console.log('render pictures ', pictures); 
        // console.log('Props: ', this.props); 
        // console.log('state',this.state); 

        if(pictures.length > 0){
            const dispPictures = pictures.map(({title, description, url, pid, lat, lng, userId}) => {

                var styles = {
                    backgroundImage: "url(" + url + ")",
                    border: '2px solid red'
                }

                return (
                    // <div key={pid}>
                    //     <h1>Image</h1>
                    //     <img src={url} width="30" height="30" className="d-inline-block" alt={title}/>
                    // </div>
                    <div className="justify-content-center d-flex col-xl-3 col-lg-4 col-md-6 col-sm-6 my-3" key={pid}>
                        <div className="pic background-image" style={styles} data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.picClick({title:title, url:url, description: description, pid:pid, lat:lat, lng:lng, userId: userId})}></div>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalCenterTitle">Edit Picture</h5>
                                        <button type="buttons" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <UploadForm photoData={this.state.pictureData} onSubmit={this.submit} initialValues={this.state.pictureData}/> */}
                                        <UploadForm onSubmit={this.submit} initialValues={this.state.pictureData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
            return (
                    dispPictures
            )
        }else{
            return (
                <h1>Loading Pictures</h1>
            )
        }
    }
}

export default Pictures; 

