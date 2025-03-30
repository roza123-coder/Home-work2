  import { useDispatch, useSelector } from "react-redux";
  import { setFilter } from "../../redux/todoSlice";

  const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.todos.filter || "all");

    const handleClick = (filterType) => {
      dispatch(setFilter(filterType)); 
    };

    const filters = ["all", "active", "completed"];

    return (
      <div>
        {filters.map((filterType) => (
          <button key={filterType} onClick={() => handleClick(filterType)}
          style={{
            fontWeight: filter === filterType ? "bold" : "normal",
          }}>
           
            {filterType === "all"
              ? "Все" 
              : filterType === "active"
              ? "Активные"
              : "Завершенные"}
          </button>
        ))}
      </div>
    );
  };

  export default Filter;
