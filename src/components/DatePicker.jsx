import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "react-materialize";
import "./DatePicker.css";
import { UsersIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
function DatePicker(props) {
  const navigator = useNavigate();
  const [ranges, setChanges] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [guest, setGuest] = useState(2);
  function handleSelect(ranges) {
    setChanges((info) => {
      return { ...info, ...ranges.selection };
    });
  }
  return (
    <div
      {...props}
      className={"dateRange" + (props.className ? " " + props.className : "")}
    >
      <DateRangePicker ranges={[ranges]} onChange={handleSelect} />
      <div className="dateRange__content">
        <div className="dateRange__contentHeader">
          <h4>Number of Guests </h4>
          <UsersIcon className="dateRange__contentHeaderIcon" />
        </div>
        <input
          type="number"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
        <Button
          onClick={() => navigator("/search")}
          className="dateRange__searchBtn"
          waves="light"
        >
          Search Airbnb
        </Button>
      </div>
    </div>
  );
}

export default DatePicker;
