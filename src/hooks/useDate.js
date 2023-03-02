import { useState } from "react";

export const useDate = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const nextMonth = () => {
    currentMonth < 11
      ? setCurrentMonth((prev) => prev + 1)
      : (setCurrentMonth(0), setCurrentYear((prev) => prev + 1));
  };
  const prevMonth = () => {
    currentMonth > 0
      ? setCurrentMonth((prev) => prev - 1)
      : (setCurrentMonth(11), setCurrentYear((prev) => prev - 1));
  };

  const handleSelection = (event) => {
    //Event delegation
    if (event.target.id === "day") {
      setSelectedDate(
        new Date(
          currentYear,
          currentMonth,
          event.target.getAttribute("data-day")
        )
      );
    }
  };

  return {
    currentMonth,
    currentYear,
    selectedDate,
    nextMonth,
    prevMonth,
    handleSelection,
  };
};
