import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src={require(`./../../public/img/${this.props.item.img}`)} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price}$</p>
            <div className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)}></div>
      </div>
    )
  }
}

export default Order