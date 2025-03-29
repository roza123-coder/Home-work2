import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";

const Cart = () => {
  const { items = [], totalPrice = 0 } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 ? <p>Корзина пуста</p> : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}₽
              <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Общая сумма: {totalPrice}₽</h3>
      {items.length > 0 && <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>}
    </div>
  );
};

export default Cart;
