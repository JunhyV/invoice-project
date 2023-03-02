import React, { useState } from "react";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import { useDate } from "../../hooks/useDate";
import {
  getNumberOfDaysInMonth,
  getSortedDays,
  months,
  range,
} from "../../utils/calendar.js";

const Calendar = () => {
  const {currentMonth, currentYear, selectedDate, prevMonth, nextMonth, handleSelection} = useDate();
  return (
    <div className="calendar">
      <div className="calendar__month">
        <img onClick={prevMonth} src={arrowLeft} alt="left-arrow" />
        {months[currentMonth]} {currentYear}
        <img onClick={nextMonth} src={arrowRight} alt="right-arrow" />
      </div>
      <div className="calendar__grid-days">
{/*         {getSortedDays(currentYear, currentMonth).map((day, i) => (
          <p className="day" key={i}>
            {day}
          </p>
        ))} */}
        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map(
          (day, i) => (
            <p
              onClick={handleSelection}
              className={`calendar__available ${
                selectedDate?.getTime() ===
                new Date(currentYear, currentMonth, day).getTime()
                  ? "active"
                  : ""
              }`}
              id="day"
              data-day={day}
              key={i}
            >
              {day}
            </p>
          )
        )}
      </div>
      <p></p>
    </div>
  );
};

export default Calendar;
