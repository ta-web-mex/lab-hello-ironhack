import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Card
