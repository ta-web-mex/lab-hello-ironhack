import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} alt="" />
        <h2>{this.props.description}</h2>
      </div>
    )
  }
}

export default Card