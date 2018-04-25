import React, {Component} from 'react';
import axios from 'axios';

export default class ManyDogs extends Component {
    constructor(){
        super();
        this.state = {
            dogs:[]
        }
    }
    componentDidMount(){
        axios.get('https://dog.ceo/api/breed/dachshund/images').then( res => {
            this.setState({
                dogs:res.data.message
            })
        })
    }

    render(){
        const dogPics = this.state.dogs.slice(0,20)
        const dogPicsRender = dogPics.map( dogPic => {
            return (
                <img src={dogPic} key={dogPic}/>
            )
        })
        
        return(
            <div>
                {dogPicsRender}
                <p>test</p>
                
            </div>
        )
    }
}