import React, { useState,useContext } from 'react';
import CartCardPizza from '../components/CartCardPizza';
import { MyContext } from '../Context';

const Cart = () => {
  
  const {pizzaCart,incrementarCantidad,disminuirCantidad,totalPrice,token } = useContext(MyContext);  


  return (
    <div>
      <div className="grilla">
        {pizzaCart.map((pizza, index) => (
          <div key={index}>
            <CartCardPizza pizza={pizza} />
            <div className='cajaBtn'>
              <button className='btnDisminuir' onClick={() => disminuirCantidad(index)}>-</button>
              
              <button className='btnIncremento' onClick={() => incrementarCantidad(index)}>+</button>
            </div>
            <p className='subTotal'>Subtotal: ${pizza.price * pizza.cantidad}</p>
          </div>
        ))}
      </div>

      <div className='cajaTotal'>
        <h2 className='totalCompra'> 🛒Total de la compra: ${totalPrice}</h2>
        <button className={`btnTotal ${!token ? 'disabled' : ''}`} onClick={() => alert('Tu compra esta siendo procesada')}  disabled={!token} >Pagar</button>
      </div>
    </div>
  );
};

export default Cart;