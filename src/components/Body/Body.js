import React, { useState } from "react";
import MainSearchBar from "./MainSearchBar";
import Location from "./Location";
import Breeds from "./Breeds";
import Genders from "./Genders";
import Desexed from "./Desexed";
import Vaccinated from "./Vaccinated";
import MainColors from "./MainColors";
import Size from "./Size";
import Age from "./Age";
import Dogs from "./Dogs";
import "../../styles/Body.css";

function Body() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedDesexed, setSelectedDesexed] = useState([]);
  const [selectedVaccinated, setSelectedVaccinated] = useState([]);
  const [selectedMainColors, setSelectedMainColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedAge, setSelectedAge] = useState([]);

  const areFiltersApplied =
    selectedBreeds.length > 0 ||
    selectedGenders.length > 0 ||
    selectedLocation.length > 0 ||
    selectedDesexed.length > 0 ||
    selectedVaccinated.length > 0 ||
    selectedMainColors.length > 0 ||
    selectedSize.length > 0 ||
    (selectedAge.length > 0 && (selectedAge[0] !== 1 || selectedAge[1] !== 15));

  const clearAllFilters = () => {
    setSearchTerm("");
    setIsFilterVisible(true);
    setSelectedBreeds([]);
    setSelectedGenders([]);
    setSelectedLocation([]);
    setSelectedDesexed([]);
    setSelectedVaccinated([]);
    setSelectedMainColors([]);
    setSelectedSize([]);
    setSelectedAge([]);
  };
  const activeFilterCount =
    selectedBreeds.length +
    selectedGenders.length +
    selectedLocation.length +
    selectedDesexed.length +
    selectedVaccinated.length +
    selectedMainColors.length +
    selectedSize.length +
    (selectedAge.length > 0 && (selectedAge[0] !== 1 || selectedAge[1] !== 15)
      ? 1
      : 0);

  return (
    <>
      <body className="bodyContainer">
        {isFilterVisible && <div className="overlay"></div>}
        <MainSearchBar
          toggleFilterVisibility={() => setIsFilterVisible(!isFilterVisible)}
          isFilterVisible={isFilterVisible}
          setSearchTerm={setSearchTerm}
          activeFilterCount={activeFilterCount}
        />

        <div className="bodyContent">
          {isFilterVisible && (
            <div className="filterContent">
              {areFiltersApplied && (
                <div className="appliedFilterHeader">
                  <strong>Applied filters:</strong>
                  <span className="clearFilters" onClick={clearAllFilters}>
                    Clear all ×
                  </span>
                </div>
              )}
              <div className="appliedFilters">
                {selectedBreeds.map((breed) => (
                  <button
                    key={breed}
                    onClick={() =>
                      setSelectedBreeds(
                        selectedBreeds.filter((b) => b !== breed)
                      )
                    }
                  >
                    {breed} ×
                  </button>
                ))}
                {selectedGenders.map((gender) => (
                  <button
                    key={gender}
                    onClick={() =>
                      setSelectedGenders(
                        selectedGenders.filter((g) => g !== gender)
                      )
                    }
                  >
                    {gender} ×
                  </button>
                ))}
                {selectedLocation.map((location) => (
                  <button
                    key={location}
                    onClick={() =>
                      setSelectedLocation(
                        selectedLocation.filter((l) => l !== location)
                      )
                    }
                  >
                    {location} ×
                  </button>
                ))}
                {selectedDesexed.map((desexed) => (
                  <button
                    key={desexed}
                    onClick={() =>
                      setSelectedDesexed(
                        selectedDesexed.filter((d) => d !== desexed)
                      )
                    }
                  >
                    Desexed: {desexed} ×
                  </button>
                ))}
                {selectedVaccinated.map((vaccinated) => (
                  <button
                    key={vaccinated}
                    onClick={() =>
                      setSelectedVaccinated(
                        selectedVaccinated.filter((v) => v !== vaccinated)
                      )
                    }
                  >
                    Vaccinated: {vaccinated} ×
                  </button>
                ))}
                {selectedMainColors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedMainColors(
                        selectedMainColors.filter((c) => c !== color)
                      )
                    }
                  >
                    {color} ×
                  </button>
                ))}
                {selectedSize.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize(selectedSize.filter((s) => s !== size))
                    }
                  >
                    Size: {size} ×
                  </button>
                ))}

                {selectedAge.length > 0 &&
                  (selectedAge[0] !== 1 || selectedAge[1] !== 15) && (
                    <button onClick={() => setSelectedAge([])}>
                      Age: {selectedAge[0]} - {selectedAge[1]} ×
                    </button>
                  )}
              </div>
              <Location
                selectedOptions={selectedLocation}
                setSelectedOptions={setSelectedLocation}
              />
              <Breeds
                selectedOptions={selectedBreeds}
                setSelectedOptions={setSelectedBreeds}
              />
              <Genders
                selectedOptions={selectedGenders}
                setSelectedOptions={setSelectedGenders}
              />
              <Desexed
                selectedOptions={selectedDesexed}
                setSelectedOptions={setSelectedDesexed}
              />
              <Vaccinated
                selectedOptions={selectedVaccinated}
                setSelectedOptions={setSelectedVaccinated}
              />
              <MainColors
                selectedOptions={selectedMainColors}
                setSelectedOptions={setSelectedMainColors}
              />
              <Size
                selectedOptions={selectedSize}
                setSelectedOptions={setSelectedSize}
              />
              <Age
                selectedOptions={selectedAge}
                setSelectedOptions={setSelectedAge}
              />
            </div>
          )}
          <Dogs
            searchTerm={searchTerm}
            selectedBreeds={selectedBreeds}
            selectedGenders={selectedGenders}
            selectedLocation={selectedLocation}
            selectedDesexed={selectedDesexed}
            selectedVaccinated={selectedVaccinated}
            selectedMainColors={selectedMainColors}
            selectedSize={selectedSize}
            selectedAge={selectedAge}
          />
        </div>
      </body>
    </>
  );
}

export default Body;
