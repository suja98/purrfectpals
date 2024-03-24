import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import FilterButton from "./FilterButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGenderAmbiguous } from "react-icons/bs";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Genders({ selectedOptions, setSelectedOptions }) {
  const [openMenus, setOpenMenus] = useState([]);
  const options = ["Male", "Female"];

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
          <BsGenderAmbiguous />
          <span>Genders</span>
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
        {options.map((option, index) => (
          <div key={index}>
            <FilterButton
              color={option}
              isSelected={selectedOptions.includes(option)}
              onClick={handleBtns}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genders;
