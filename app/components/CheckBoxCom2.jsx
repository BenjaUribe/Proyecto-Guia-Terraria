"use client"
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; 

const CheckboxGroup2 = ({ numCheckboxes = 27 }) => {
  const [checkboxes, setCheckboxes] = useState(
    new Array(numCheckboxes).fill(false) 
  );

  useEffect(() => {
    const storedValues = Cookies.get("checkboxes2");
    if (storedValues) {
      try {
        const parsedValues = JSON.parse(storedValues);
        if (parsedValues.length === numCheckboxes) { 
          setCheckboxes(parsedValues);
        } else {
          console.warn(
            "Ignoring stored checkboxes due to length mismatch."
          );
        }
      } catch (error) {
        console.warn("Error parsing stored checkboxes:", error);
      }
    }
  }, [numCheckboxes]);

  const handleCheckboxChange = (index) => (event) => {
    const updatedCheckboxes = [...checkboxes]; 
    updatedCheckboxes[index] = event.target.checked;
    setCheckboxes(updatedCheckboxes);

    Cookies.set("checkboxes2", JSON.stringify(updatedCheckboxes));
  };

  return (
    <div>
      {checkboxes.map((isChecked, index) => (
        <label key={index}>
            
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange(index)}
          />
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup2