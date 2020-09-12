// Displays 'Day of Week', 'Month' & 'Day' & 'Year', 'Current Time' at the top of the page
let currentTime = moment().format("dddd, MMM Do YYYY, HH:mm A");
$("#currentDay").text(currentTime);

// Puts currentTime components into an array
let array = [];
array.push(currentTime);
console.log(array);

let workHours = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

let container = $(".container");
let time = "";
time = "5:00AM";

let newRow = $("<section>").addClass("row");
let timeColumn = $("<div>").addClass("col-md-4");
timeColumn.text(time);
newRow.append(timeColumn);

let inputColumn = $("<div>").addClass("col-md-5");
let input = $('<input type= "text">');
input.addClass("input");
input.attr("id", time);
inputColumn.append(input);
newRow.append(inputColumn);

let buttonColumn = $("<div>").addClass("col-md-3");
let saveButton = $("<button>").addClass("save-btn");
saveButton.attr("date-time", time);
saveButton.text("Save");
buttonColumn.append(saveButton);
newRow.append(buttonColumn);

container.append(newRow);