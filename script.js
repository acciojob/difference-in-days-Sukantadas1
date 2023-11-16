var dateDiffInDays = function (date1, date2) {
 const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  // Parse the input dates
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  // Calculate the time difference between the two dates
  const timeDiff = parsedDate2 - parsedDate1;

  // Calculate the difference in days
  const diffDays = Math.round(timeDiff / oneDay);

  return diffDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
