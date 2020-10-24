$(function () {
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

  // Dynamically create rows
  workday.forEach(function (timeBlock, index) {
    var timeTag = timeBlock.time;
    var blockColor = rowColor(timeTag);
    var row =
      '<div class="time-block" id="' +
      index +
      '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
      timeTag +
      '</div><textarea class="form-control ' +
      blockColor +
      '">' +
      timeBlock.event +
      '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    $(".container").append(row);
    console.log(index);
  });

  // Determine the color of rows based on what time it currently is
  function rowColor(time) {
    var todoNow = moment(currentHour, "h a");
    var todoFuture = moment(time, "h a");

    if (todoNow.isBefore(todoFuture) === true) {
      return "future";
    } else if (todoNow.isAfter(todoFuture) === true) {
      return "past";
    } else {
      return "present";
    }
  }

  // Saving entries and adding them to local storage
  $(".saveButton").on("click", function () {
    var timeblockID = parseInt($(this).closest(".time-block").attr("id"));
    var plannerEntry = $.trim($(this).parent().siblings("textarea").val());
    workday[timeblockID].event = plannerEntry;

    var plannerEvents = JSON.parse(localStorage.getItem("workDay"));
    if (plannerEvents) {
      workday = plannerEvents;
    }
    localStorage.setItem("workDay", JSON.stringify(workday));
  });
});

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
