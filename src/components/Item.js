import React, { Component } from "react";

class Item extends Component {
   render() {
      return (
         <div className="item">
            <img src={require(`./../../public/img/${this.props.item.img}`)} />
            <p>{this.props.item.img}</p>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className="add-to-cart">+</div>
         </div>
      );
   }
}

export default Item;
