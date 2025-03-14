import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart?.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}₽
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Итого: {totalPrice}₽</h3>
      <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
    </div>
  );
};

export default Cart;
