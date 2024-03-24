// src/components/Dogs/Dogs.js
import React, { useMemo } from "react";
import PopUpInfo from "./PopUpInfo";
import Data from "../../Data/Data";
import "../../styles/Dogs.css";
import { CiLocationOn } from "react-icons/ci";
import { PiDogLight } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

function Dogs({
  searchTerm,
  selectedBreeds,
  selectedGenders,
  selectedLocation,
  selectedDesexed,
  selectedVaccinated,
  selectedMainColors,
  selectedSize,
  selectedAge,
}) {
  const filteredDogs = useMemo(() => {
    return Data.filter((dog) => {
      const term = searchTerm.toLowerCase();
      const matchesSearchTerm =
        !term ||
        dog.petName.toLowerCase().includes(term) ||
        dog.breed.toLowerCase().includes(term) ||
        dog.location.toLowerCase().includes(term);
      const matchesLocation =
        !selectedLocation.length || selectedLocation.includes(dog.location);
      const matchesBreed =
        !selectedBreeds.length || selectedBreeds.includes(dog.breed);
      const matchesGender =
        !selectedGenders.length || selectedGenders.includes(dog.gender);
      const matchesDesexed =
        !selectedDesexed.length || selectedDesexed.includes(dog.desexed);
      const matchesVaccinated =
        !selectedVaccinated.length ||
        selectedVaccinated.includes(dog.vaccinated);
      const matchesColor =
        !selectedMainColors.length ||
        selectedMainColors.includes(dog.mainColor);
      const matchesSize =
        !selectedSize.length || selectedSize.includes(dog.size);
      const matchesAge =
        selectedAge.length === 0 ||
        (dog.age >= selectedAge[0] && dog.age <= selectedAge[1]);

      return (
        matchesSearchTerm &&
        matchesLocation &&
        matchesBreed &&
        matchesGender &&
        matchesDesexed &&
        matchesVaccinated &&
        matchesColor &&
        matchesSize &&
        matchesAge
      );
    });
  }, [
    searchTerm,
    selectedBreeds,
    selectedGenders,
    selectedLocation,
    selectedDesexed,
    selectedVaccinated,
    selectedMainColors,
    selectedSize,
    selectedAge,
  ]);

  return (
    <section id="sectionDogCards">
      <div className="dogCardsContainer">
        {filteredDogs.length > 0 ? (
          filteredDogs.map((dog) => (
            <div key={dog.id} className="dogCard">
              <PopUpInfo
                Data={dog}
                trigger={
                  <div className="dogCardContent">
                    <div className="dogCardImgContainer">
                      <img src={dog.img[0]} alt={`${dog.petName}`} />
                    </div>
                    <div className="dogCardText">
                      <div className="dogCardTitle">{dog.petName}</div>
                      <div className="dogCardDetail">
                        <div className="flex gap-4">
                          <div className="flex gap-1">
                            <span className="mt-1">
                              <PiDogLight />
                            </span>{" "}
                            <span>{dog.breed}</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="mt-1">
                              <LiaBirthdayCakeSolid />
                            </span>{" "}
                            <span>{dog.age}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <span className="mt-1">
                            <CiLocationOn />
                          </span>{" "}
                          <span>{dog.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))
        ) : (
          <div className="noDogsMessage">
            No dogs match your filters. Please try adjusting your search
            criteria.
          </div>
        )}
      </div>
    </section>
  );
}

export default Dogs;
