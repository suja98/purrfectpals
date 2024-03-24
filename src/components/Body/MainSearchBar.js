import React, { useEffect, useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function MainSearchBar({
  toggleFilterVisibility,
  isFilterVisible,
  setSearchTerm,
  activeFilterCount,
}) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const searchBar = document.querySelector(".search");
    const clearIcon = document.querySelector(".clearIcon");

    const handleKeyUp = (event) => {
      setSearchInput(searchBar.value);
      clearIcon.style.visibility = searchBar.value ? "visible" : "hidden";
    };

    const handleClick = () => {
      searchBar.value = "";
      clearIcon.style.visibility = "hidden";
      setSearchInput("");
    };

    searchBar.addEventListener("keyup", handleKeyUp);
    clearIcon.addEventListener("click", handleClick);

    return () => {
      searchBar.removeEventListener("keyup", handleKeyUp);
      clearIcon.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput);
  };

  return (
    <div id="searchBarSection">
      <div className="wrapper">
        <button className="filterButton" onClick={toggleFilterVisibility}>
          <HiAdjustmentsHorizontal />
          {"Filters "}
          {isFilterVisible ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
          {!isFilterVisible && activeFilterCount > 0 && (
            <div className="updateFilter">{activeFilterCount}</div>
          )}
        </button>
        <form className="mainSearchBarContainer" onSubmit={handleSubmit}>
          <input
            className="search"
            placeholder="Search by location, breed, ID or name"
            type="text"
          />
          <FontAwesomeIcon icon={faTimes} className="clearIcon" />
          <button type="submit" className="mainSearchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainSearchBar;
