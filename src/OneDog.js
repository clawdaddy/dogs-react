import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class OneDog extends Component {
constructor(){
    super();
    this.state = {
      puppy:''
    }
  }
  componentDidMount(){
      axios.get('https://dog.ceo/api/breeds/image/random').then( res => {
    console.log('hit')
      this.setState({
          puppy:res.data.message
        })
      })
  }
  


  render() {
    const { puppy } = this.state;
    
    return (
      <div className="App">

      <Link to='/manyDogs'><p>hellO!</p></Link>
        <img src= {puppy}/>
      </div>
    );
  }
}