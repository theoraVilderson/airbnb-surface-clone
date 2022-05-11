import React, { useState } from "react";
import "./Banner.css";
import { Button } from "react-materialize";
import { useNavigate } from "react-router-dom";
import DatePicker from "./DatePicker";
function Banner() {
  const navigate = useNavigate();
  const [searchToggle, setSearchToggle] = useState(false);

  return (
    <div className="banner">
      <div className="banner__datePickerToggler">
        <Button
          onClick={() => setSearchToggle(!searchToggle)}
          className="banner__datePickerTogglerBtn"
          flat
          waves="light"
        >
          {searchToggle ? "Hide" : "Search Dates"}
        </Button>
        {searchToggle ? <DatePicker className="banner__datePicker" /> : null}
      </div>
      <div className="banner__section banner__section--left">
        <div className="banner__content">
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button
            className="banner__leftBtn"
            onClick={() => navigate("/search")}
            waves="light"
          >
            Explore Near By
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
