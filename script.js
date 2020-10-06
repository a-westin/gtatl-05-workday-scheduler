$(document).ready(function () {
  // Defining variables
  var timeblockContainer = $("timeblockContainer");
  var workday = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  var currentHour = moment().format("h");
});

// Populating the p tag with today's date
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
