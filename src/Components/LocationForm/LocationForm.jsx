import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LocationForm.css";

const LocationForm = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather/${location}`);
  };

  return (
    <div className="container">
      <div className="container__header">
        <h2>Weather App</h2>
      </div>
      <div className="main__container">
        <form onSubmit={handleSubmit}>
          <input
            className="search__bar"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city name"
            required
          />
        </form>
        <div
          style={{
            display: "flex",
            color: "rgb(211, 211, 211)",
            margin: "12px",
          }}
        >
          <hr className="horizontal__line" />
          or <hr className="horizontal__line" />
        </div>
        <button className="location__btn">Get Device Location</button>
      </div>
    </div>
  );
};

export default LocationForm;
