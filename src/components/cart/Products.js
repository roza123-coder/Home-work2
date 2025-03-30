import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice"; 
import { addToCart, removeFromCart, clearCart } from "../../redux/cartSlice"; 

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            {cartItems.find((item) => item.id === product.id) ? (
              <button onClick={() => dispatch(removeFromCart(product.id))}>
                Удалить из корзины
              </button>
            ) : (
              <button onClick={() => dispatch(addToCart(product))}>
                Добавить в корзину
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
