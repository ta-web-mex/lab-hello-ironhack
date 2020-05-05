import React, { Component } from 'react'

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <div>
          <img src={this.props.img} alt="" />
        </div>
        <div>
          <p>{this.props.info}</p>
        </div>
      </div>
    )
  }
}

export default Feature
