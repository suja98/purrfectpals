import React, { useState } from "react";
import Box from "@mui/material/Box";
import AgeSlider from "./AgeSlider";
import Data from "../../Data/Data";
import MenuToggle from "./MenuToggle";
import { GiCandles } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Age({ setSelectedOptions }) {
  const [value, setValue] = useState([]);
  const [openMenus, setOpenMenus] = useState([]);

  const minAge = Math.min(...Data.map((dog) => dog.age));
  const maxAge = Math.max(...Data.map((dog) => dog.age));

  return (
    <div className="filterCategory">
      <MenuToggle index={0} openMenus={openMenus} setOpenMenus={setOpenMenus}>
        <h3 className="filterDataTitle">
          <GiCandles />
          <span>Age Range</span>
          <FontAwesomeIcon
            icon={openMenus.includes(0) ? faChevronUp : faChevronDown}
            className="chevron-of-h3"
          />
        </h3>
      </MenuToggle>
      <div
        style={{
          display: openMenus.includes(0) ? "block" : "none",
          paddingLeft: "20px",
        }}
      >
        <span className="ageRange">
          {value[0]} - {value[1]} years old
        </span>
        <Box sx={{ width: "100%" }}>
          <AgeSlider
            value={value}
            setValue={setValue}
            minAge={minAge}
            maxAge={maxAge}
            minDistance={1}
            setSelectedOptions={setSelectedOptions}
          />
        </Box>
      </div>
    </div>
  );
}

export default Age;
