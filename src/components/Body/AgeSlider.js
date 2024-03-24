import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const AgeSlider = ({
  value,
  setValue,
  minAge,
  maxAge,
  minDistance,
  setSelectedOptions,
}) => {
  useEffect(() => {
    setValue([minAge, maxAge]);
    setSelectedOptions([minAge, maxAge]);
  }, [minAge, maxAge, setValue, setSelectedOptions]);

  const handleChangeSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxAge - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minAge + minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  useEffect(() => {
    setSelectedOptions(value);
  }, [value, setSelectedOptions]);

  return (
    <Box>
      <Slider
        value={value}
        onChange={handleChangeSlider}
        min={minAge}
        max={maxAge}
        step={1}
        disableSwap
        className="ageSlide"
      />
    </Box>
  );
};

export default AgeSlider;
