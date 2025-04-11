import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { addToCart, removeFromCart, clearCart } from "../../redux/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);


  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; 
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <h2>Продукты</h2>
      <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} ₽
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

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Назад
        </button>
        <span>{`Страница ${currentPage} из ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Вперед
        </button>
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
