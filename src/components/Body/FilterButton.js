import React from "react";

function FilterButton({ color, isSelected, onClick }) {
  return (
    <button
      onClick={() => onClick(color)}
      type="button"
      name="colors"
      value={color}
      className={`selectButton ${isSelected ? "selectButtonActive" : ""}`}
    >
      {color}
    </button>
  );
}

export default FilterButton;
