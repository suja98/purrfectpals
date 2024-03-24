import React, { useState, useEffect } from "react";
import MenuToggle from "./MenuToggle";
import Data from "../../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CgSize } from "react-icons/cg";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FilterButton from "./FilterButton";

function Size({ selectedOptions, setSelectedOptions }) {
  const [openMenus, setOpenMenus] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const uniqueSizes = [...new Set(Data.map((dog) => dog.size))];
    const sortedSizes = ["XS", "S", "M", "L", "XL"].filter((size) =>
      uniqueSizes.includes(size)
    );
    setSizes(sortedSizes);
  }, []);

  const handleBtns = (value) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(value)) {
        newSelected.delete(value);
      } else {
        newSelected.add(value);
      }
      return [...newSelected];
    });
  };

  return (
    <div className="filterCategory">
      <MenuToggle index={0} openMenus={openMenus} setOpenMenus={setOpenMenus}>
        <h3 className="filterDataTitle">
          <CgSize />
          <span>Size</span>
          <FontAwesomeIcon
            icon={openMenus.includes(0) ? faChevronUp : faChevronDown}
            className="chevron-of-h3"
          />
        </h3>
      </MenuToggle>
      <div className="selectSection">
        {sizes.map((size, index) => (
          <div
            key={index}
            style={{ display: openMenus.includes(0) ? "flex" : "none" }}
          >
            <FilterButton
              color={size}
              isSelected={selectedOptions.includes(size)}
              onClick={handleBtns}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Size;
