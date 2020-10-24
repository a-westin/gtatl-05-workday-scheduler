$(document).ready(function () {
  // Defining variables
  var workday = [
    { time: "9 a.m.", event: "" },
    { time: "10 a.m", event: "" },
    { time: "11 a.m.", event: "" },
    { time: "12 p.m.", event: "" },
    { time: "1 p.m.", event: "" },
    { time: "2 p.m.", event: "" },
    { time: "3 p.m.", event: "" },
    { time: "4 p.m.", event: "" },
    { time: "5 p.m.", event: "" },
  ];
  var currentHour = moment().format("h a");

  // Populating the p tag with today's date
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

  // For loop to create what will display on the calendar
  // for (var i = 0; i < workday.length; i++) {
  //   var timeBlock = $("<div>").addClass("row time-block");
  //   var hourBlock = $("<div>").addClass("hour col-md-1");
  //   var textArea = $("<textarea>").addClass("col-md-10");
  //   textArea.text(localStorage.getItem(workday[i]));

  //   if (currentHour == workday[i]) {
  //     textArea.addClass("present");
  //   } else if (currentHour < workday[i]) {
  //     textArea.addClass("past");
  //   } else if (currentHour > workday[i]) {
  //     textArea.addClass("future");
  //   }
  //   var saveBtn = $("<button>").addClass("saveBtn col-md-1");
  //   timeBlock.append(hourBlock, textArea, saveBtn);
  //   timeblockContainer.append(timeBlock);
  // }
});
