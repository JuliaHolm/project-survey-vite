import "./CatProfile.css";
import { catOptions, genderGroups } from "./Arrays";

// import { useState } from "react";

export const CatProfile = ({
  userName,
  genders,
  age,
  personality,
  chooseCat,
  catName,
}) => {
  // Find the selected cat object based on chooseCat ID
  const selectedCat = catOptions.find(
    (catOption) => catOption.id === chooseCat
  );
  // If selectedCat is found, use its imgSrc; otherwise, use a default value
  const catImageSrc = selectedCat ? selectedCat.imgSrc : "";

  const selectedGender = genderGroups.find(
    (genderOption) => genderOption.id === genders
  );

  const genderIconSrc = selectedGender ? selectedGender.imgSrc : "";

  console.log("chooseCat:", chooseCat);
  return (
    <div className="cat-profile-wrapper">
      <div className="cat-image">
        <img src={catImageSrc} alt="" />
      </div>
      <div className="cat-info">
        <div className="name-gender-container">
          <h3>{catName}</h3>
          <img src={genderIconSrc} alt="" />
        </div>
        <div className="cat-details-container">
          <div className="personality-container">
            <h4>Personality</h4>
            <p>{personality}</p>
          </div>
          <div className="age-container">
            <h4>Age</h4>
            <p>{age}</p>
          </div>
          <div className="owner-container">
            <h4>Owner</h4>
            <p>{userName}</p>
          </div>
        </div>
        <div className="description-container">
          <p>
            Congratulations {userName}! Hope you and {catName} will live happily
            ever after 😸
          </p>
          <p>Your cat is {personality} and </p>
        </div>
      </div>
    </div>
  );
};