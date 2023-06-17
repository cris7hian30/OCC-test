import React from "react";

const FilterByHouse = ({
  filterHouse,
  setFilterHouse,
  handleFilterByHouse,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setFilterHouse(value);
    handleFilterByHouse(value);
  };

  return (
    <div className="flex space-x-2 mb-4">
      <select
        value={filterHouse}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-2 py-1 text-black"
      >
        <option value="">Todas las casas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
  );
};

export default FilterByHouse;
