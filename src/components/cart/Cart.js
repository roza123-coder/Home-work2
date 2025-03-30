import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart || {});
  const { items = [], totalPrice = 0 } = cart;

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
            console.log(item);
            
          </div>
        ))
      )}
      <div>
        <strong>Итого: {totalPrice} ₽</strong>
      </div>
      <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
    </div>
  );
};

export default Cart;
