import React, { Component } from "react";

class Card extends Component{
 render(){
  return(
   <div className="Card">
    <img src={this.props.img}/>
    <p>{this.props.text}</p>
   </div>
  )
 }
}

export default Card;