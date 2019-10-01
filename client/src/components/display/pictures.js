import React, {Component} from 'react';
import axios from 'axios';

class Pictures extends Component {
    state = {
        pictures: []
    };

    componentDidMount(){
        this.getPictures();
    };

    async getPictures(){
        const data = await axios.get('/data/pic-source.json');
        console.log('data', data);
        // console.log('test', pictures); 

        this.setState({pictures:data.data.pictures});
        console.log("axios result:",this.state); 
    };

    render(){
        const {pictures} = this.state;
        console.log('render test: ', pictures.length);
        console.log('render pictures ', pictures); 

        if(pictures.length > 0){
            const dispPictures = pictures.map(({title, description, url, pid}) => {

                var styles = {
                    backgroundImage: "url(" + url + ")",
                    border: '2px solid red'
                }

                return (
                    // <div key={pid}>
                    //     <h1>Image</h1>
                    //     <img src={url} width="30" height="30" className="d-inline-block" alt={title}/>
                    // </div>
                    <div className="justify-content-center d-flex col-xl-3 col-lg-4 col-md-6 col-sm-6 my-3"  key={pid}>
                        <div className="pic background-image" style={styles}></div>
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

