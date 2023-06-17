import React from "react";
import { Button } from "./Button";

const FilterByName = ({ filterName, handleFilterByName }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filterName}
        onChange={handleFilterByName}
        className="border border-gray-300 rounded-md px-2 py-1 text-black"
      />
      <Button onClick={() => handleFilterByName(filterName)}>
        Filtrar por nombre
      </Button>
    </div>
  );
};

export default FilterByName;
