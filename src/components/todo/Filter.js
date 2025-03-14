import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/todoSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  return (
    <div>
      {['all', 'active', 'completed']?.map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          style={{ fontWeight: filter === f ? 'bold' : 'normal' }}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default Filter;
