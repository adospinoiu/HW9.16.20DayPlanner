// Displays 'Day of Week', 'Month' & 'Day' & 'Year', 'Current Time' at the top of the page
let currentTime = moment().format("dddd, MMM Do YYYY, HH:mm A");
$("#currentDay").text(currentTime);

// Puts currentTime components into an array
let array = [];
array.push(currentTime);
console.log(array);

// Array of hours considered workHours that will be displayed
let workHours = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

// Links to the 'container' <div> on the html. ***Delete CLASS***
let container = $(".container").addClass("past");
// let time = "";  ****DELETE ME IF NOT NEEDED****
// time = "5:00AM";   ****DELETE ME IF NOT NEEDED****

// Creates a new ROW that will have the workHour, Input, and saveButton
let newRow = $("<section>").addClass("row");

// Creates the <div> in the new ROW that will display the workHour
let timeColumn = $("<div>").addClass("col-md-2 hour time-block");
timeColumn.text(workHours[0]); //previously 'time'
newRow.append(timeColumn);

// Creates the <div> in the new ROW that will display the text input area
let inputColumn = $("<div>").addClass("col-md-8");
let input = $('<input type = "text">');
input.addClass("input textarea");
input.attr("id", workHours[0]); //previously workHours was 'time'
inputColumn.append(input);
newRow.append(inputColumn);

// Creates the <div> in the new ROW that will display the saveButton
let buttonColumn = $("<div>").addClass("col-md-2");
let saveButton = $("<button>").addClass("save-btn saveBtn");
saveButton.attr("date-time", workHours[0]); //previously workHours was 'time'
saveButton.text("Save");
buttonColumn.append(saveButton);
newRow.append(buttonColumn);

// Displays the new ROW (i.e. workHour, inputText, saveButton)
container.append(newRow);