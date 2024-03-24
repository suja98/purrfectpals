import React, { useState, useEffect } from "react";
import Data from "../../Data/Data";
import MenuToggle from "./MenuToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { IoIosColorFilter } from "react-icons/io";
import FilterButton from "./FilterButton";

function MainColors({ selectedOptions, setSelectedOptions }) {
  const [openMenus, setOpenMenus] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const uniqueColors = [...new Set(Data.map((dog) => dog.mainColor))];
    const sortedColors = uniqueColors.sort((a, b) => a.localeCompare(b));
    setColors(sortedColors);
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
          <IoIosColorFilter />
          <span>Main colors</span>
          <FontAwesomeIcon
            icon={openMenus.includes(0) ? faChevronUp : faChevronDown}
            className="chevron-of-h3"
          />
        </h3>
      </MenuToggle>
      <div className="selectSection">
        {colors.map((mainColor, index) => (
          <div
            key={index}
            style={{ display: openMenus.includes(0) ? "flex" : "none" }}
          >
            <FilterButton
              color={mainColor}
              isSelected={selectedOptions.includes(mainColor)}
              onClick={handleBtns}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainColors;
