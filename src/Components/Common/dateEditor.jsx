import React from "react";

function DateComponent({ dateString }) {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Get the date components (year, month, day)
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, "0");

  // Create a formatted date string (yyyy-mm-dd)
  const formattedDate = `${year}-${month}-${day}`;

  return <div>{formattedDate}</div>;
}

export default DateComponent;
