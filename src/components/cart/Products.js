import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Товары</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}₽
            <button onClick={() => dispatch(addToCart(product))}>Добавить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
