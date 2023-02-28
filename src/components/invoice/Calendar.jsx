import React, { useEffect, useState } from "react";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import arrowRight from "../../assets/icon-arrow-right.svg";
import { date, days, months, postDate, prevDate } from "../../utils/calendar";

const Calendar = () => {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [prev, setPrev] = useState([]);

  useEffect(() => {
    setMonth(currMonth);
    setYear(currYear);
    renderCalendar();
  }, []);

  const daysList = [];
  const prevList = [];
  const postList = [];

  const renderCalendar = () => {
    let lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
      lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay(),
      lastDateOfLastMonth = new Date(year, month, 0).getDate(),
      firstDayOfMonth = new Date(year, month, 1).getDay();
    
    for (let i = 1; i < lastDateOfMonth + 1; i++) {
      daysList.push(<li className="calendar__available">{i}</li>);
    }

    for (let i = firstDayOfMonth; i > 0; i--) {
      prevList.push(<li className="calendar__inactive">{lastDateOfLastMonth - i + 1}</li>)
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      postList.push(<li className="calendar__inactive">{i - lastDayOfMonth + 1}</li>)
    }


    return {
      lastDateOfLastMonth,
      lastDateOfMonth,
      lastDayOfMonth,
      firstDayOfMonth
    }
  };

  const {lastDateOfLastMonth, lastDateOfMonth, lastDayOfMonth, firstDayOfMonth} = renderCalendar();

  let calendar = new Date(),
    currYear = calendar.getFullYear(),
    currMonth = calendar.getMonth();

  const handleMonthPlus = () => {
    setMonth(month + 1);
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  const handleMonthLess = () => {
    setMonth(month - 1);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    }
  };

  return (
    <div className="calendar">
      <header className="calendar__month">
        <img src={arrowLeft} alt="left-arrow" onClick={handleMonthLess} />
        <p className="current-date">
          {months[month]} {year}
        </p>
        <img src={arrowRight} alt="right-arrow" onClick={handleMonthPlus} />
      </header>
      <div className="calendar__days">
        <ul className="calendar__grid-days">
          {days.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
        <ul className="calendar__grid-date">
          {prevList}
          {daysList}
          {postList}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
