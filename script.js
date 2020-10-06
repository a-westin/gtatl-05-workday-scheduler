$(document).ready(function () {
  // Defining variables
  var timeblockContainer = $("timeblockContainer");
  var workday = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  var currentHour = moment().format("h");
});

// Populating the p tag with today's date
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// For loop to create what will display on the calendar
for (var i = 0; i < workday.length; i++) {
  var timeBlock = $("<div>").addClass("row");
  var hourBlock = $("<div>").addClass("hour");
  var textArea = $("<textarea>");
  textArea.text(localStorage.getItem(hours[i]));

  if (currentHour == hours[i]) {
    textArea.addClass("present");
  } else if (currentHour < hours[i]) {
    textArea.addClass("past");
  } else if (currentHour > hours[i]) {
    textArea.addClass("future");
  }
}
