import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import useBreeds from "./useBreeds";
import FilterButton from "./FilterButton";
import { LiaDogSolid } from "react-icons/lia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Breeds({ selectedOptions, setSelectedOptions }) {
  const [openMenus, setOpenMenus] = useState([]);
  const breeds = useBreeds();

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
          <LiaDogSolid />
          <span>Breeds</span>
          <FontAwesomeIcon
            icon={openMenus.includes(0) ? faChevronUp : faChevronDown}
            className="chevron-of-h3"
          />
        </h3>
      </MenuToggle>
      <div
        className="selectSection"
        style={{ display: openMenus.includes(0) ? "flex" : "none" }}
      >
        {breeds.map((breed, index) => (
          <div key={index}>
            <FilterButton
              color={breed}
              isSelected={selectedOptions.includes(breed)}
              onClick={handleBtns}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breeds;
