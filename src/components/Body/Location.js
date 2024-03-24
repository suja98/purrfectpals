import React, { useEffect, useState } from "react";
import Data from "../../Data/Data";
import { GrMapLocation } from "react-icons/gr";
import MenuToggle from "./MenuToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Location({ selectedOptions, setSelectedOptions }) {
  const [openMenus, setOpenMenus] = useState([]);
  const [locations, setLocations] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const uniqueLocations = [...new Set(Data.map((dog) => dog.location))];
    const sortedLocations = uniqueLocations.sort((a, b) => a.localeCompare(b));
    setLocations(sortedLocations);
  }, []);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
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

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="filterCategory">
      <MenuToggle index={0} openMenus={openMenus} setOpenMenus={setOpenMenus}>
        <h3 className="filterDataTitle">
          <GrMapLocation />
          <span>Location</span>
          <FontAwesomeIcon
            icon={openMenus.includes(0) ? faChevronDown : faChevronUp}
            className="chevron-of-h3"
          />
        </h3>
      </MenuToggle>
      <div
        className="selectSection"
        style={{ display: openMenus.includes(0) ? "none" : "block" }}
      >
        <div className="searchLocationContainer">
          <form>
            <input
              type="text"
              className="locationSearchBar"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchChange}
            />
          </form>
        </div>
        <div className="listContainer">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <label key={index} className="listItem">
                <input
                  checked={selectedOptions.includes(location)}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  value={location}
                />
                <span>{location}</span>
              </label>
            ))
          ) : (
            <div className="noLocationFound">No location found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Location;
