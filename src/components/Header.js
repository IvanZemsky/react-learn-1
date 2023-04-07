import React from "react";
import { useState } from "react";
import cartIcon from './../img/basket.png';

export default function Header() {
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
               <div className="shop-cart"></div>
            )}
         </div>
         <div className="presentation"></div>
      </header>
   );
}
