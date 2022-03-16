import React from "react";
import ReactDOM from "react-dom";

//import { Route,  BrowserRouter as Router, BrowserRouter  } from 'react-router-dom';
import './index.css';
import App from './App';
//import { StrictMode } from "react/cjs/react.production.min";
//import SignUp from './App';
//npm i react-router -S

//import ContactUs from './Contactus';
//import AboutUs from "./Aboutus";




ReactDOM.render(<App/> ,document.getElementById("root"));



 




//import App from './App';
//Components, props
/*
class Tel extends React.Component{

  constructor(props){
   super(props);
   this.state = {
     color: "black",
     model: "inbuilt"
   };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render(){
    return(
      <div>
        <h2>This TV device is {this.state.color} in color and {this.state.model}</h2>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    )
  }

}

ReactDOM.render(<Tel/>,document.getElementById('root'));
*/




