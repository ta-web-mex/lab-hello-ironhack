import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="" />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Card
