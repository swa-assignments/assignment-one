"use client"

import React from "react";
import { LOCATIONS } from "../config/constants";

const SelectLocation = ({value, onChange}) => {
  return (
    <div>
      <label htmlFor="select-location">City</label>
      <select
        id="select-location"
        name="place"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {LOCATIONS.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLocation;
