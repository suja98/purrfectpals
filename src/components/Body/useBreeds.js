import { useState, useEffect } from "react";
import Data from "../../Data/Data";

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const uniqueBreeds = [...new Set(Data.map((dog) => dog.breed))];
    const sortedBreeds = uniqueBreeds.sort((a, b) => a.localeCompare(b));
    setBreeds(sortedBreeds);
  }, []);

  return breeds;
};

export default useBreeds;
