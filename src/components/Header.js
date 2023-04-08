import React from "react";
import { useState } from "react";
import cartIcon from './../img/basket.png';
import Order from "./Order";

const showOrders = (props) => {
   let summa = 0;
   props.orders.forEach(el => summa += Number.parseFloat(el.price));
   return(
      <div>
         {props.orders.map(el => (
            <Order key={el.id} item={el} onDelete={props.onDelete}/>
         ))}
         <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      </div>
   );
}

const showNothing = () => {
   return (
      <div className="empty">
         <h2>Товаров нет</h2>
      </div>
   )
}

export default function Header(props) {
   let [cartOpen, setCartOpen] = useState(false);

   return (
      <header>
         <div>
            <span className="logo">House Staff</span>
            <ul className="nav">
               <li>Про нас</li>
               <li>Конатакты</li>
               <li>Кабинет</li>
            </ul>
            <img
               onClick={() => setCartOpen(cartOpen = !cartOpen)}
               className={`shop-cart-button ${cartOpen && 'active'}`}
               src={cartIcon} alt="cart" width="30" height="30"
            />
            {cartOpen && (
               <div className="shop-cart">
                  {props.orders.length > 0 ?
                     showOrders(props) : showNothing()
                  }
               </div>
            )}
         </div>
         <div className="presentation"></div>
      </header>
   );
}

/*
{props.orders.map(el => (
                     <Order key={el.id} item={el}/>
                  ))}
                  */
