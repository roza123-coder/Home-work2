// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, clearCart } from "../../redux/cartSlice";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart || {});
//   const { items = [], totalPrice = 0 } = cart;

//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Корзина</h2>
//       {items.length === 0 ? (
//         <p>Корзина пуста</p>
//       ) : (
//         items.map((item) => (
//           <div key={item.id}>
//             <span>{item.name}</span>
//             <span>{item.price} ₽</span>
//             <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
//             console.log(item);
            
//           </div>
//         ))
//       )}
//       <div>
//         <strong>Итого: {totalPrice} ₽</strong>
//       </div>
//       <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart || {});
  const { items = [], totalPrice = 0 } = cart;
  const dispatch = useDispatch();

  // Пагинация
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {currentItems.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.price} ₽</span>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
            </div>
          ))}

          {/* Пагинация */}
          <div>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Назад
            </button>
            <span>{` Страница ${currentPage} из ${totalPages} `}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Вперёд
            </button>
          </div>
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div>
            <strong>Итого: {totalPrice} ₽</strong>
          </div>
          <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
        </>
      )}
    </div>
  );
};

export default Cart;
