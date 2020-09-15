// Displays 'Day of Week', 'Month' & 'Day' & 'Year', 'Current Time' at the top of the page
let currentTime = moment().format("dddd, MMM Do YYYY, HH:mm A");
$("#currentDay").text(currentTime);


// Puts currentTime components into an array
let array = [];
array.push("Current time: " + currentTime);
console.log(array);


// Splits the currentTime components into three: day, date, time
let timeCompare = " ";
timeCompare = currentTime.split(", ");
console.log("Split current time: " + timeCompare);
console.log("Hour: " + timeCompare[2]);


// Splits the time component and store just the hour 05, 06, etc
let hourCompare = [];
hourCompare = timeCompare[2].split(":");
console.log("Hour Split: " + hourCompare[0]);


// Array of hours considered workHours that will be displayed
// let workHours = [
//     { 07: ":00 AM" },
//     { 08: ":00 AM" },
//     { 09: ":00 AM" },
//     { 10: ":00 AM" },
//     { 11: ":00 AM" },
//     { 12: ":00 PM" },
//     { 01: ":00 PM" },
//     { 02: ":00 PM" },
//     { 03: ":00 PM" },
//     { 04: ":00 PM" }
// ]


let workHours = [
    { 
        hour: "07",
        minutes: ":00 AM" },
    { 
        hour: "08",
        minutes: ":00 AM" },
    {
        hour: "09",
        minutes: ":00 AM" },
    { 
        hour: "10",
        minutes: ":00 AM" },
    { 
        hour: "11",
        minutes: ":00 AM" },
    { 
        hour: "12",
        minutes: ":00 PM" },
    { 
        hour: "01",
        minutes: ":00 PM" },
    { 
        hour: "02",
        minutes: ":00 PM" },
    { 
        hour: "03",
        minutes: ":00 PM" },
    { 
        hour: "04", 
        minutes: ":00 PM" }
]



// Links to the 'container' <div> on the html. ***Delete CLASS***
let container = $(".container").addClass("past");

// This loop creates all the ROWS based on the number of items in workHours array
for (let i = 0; i < workHours.length; i++) {
    // Creates a new ROW that will have the workHour, Input, and saveButton
    let newRow = $("<section>").addClass("row");

    // Creates the <div> in the new ROW that will display the workHour
    let timeColumn = $("<div>").addClass("col-md-2 hour time-block");
    timeColumn.text(workHours[i].hour + workHours[i].minutes); //previously 'time'
    newRow.append(timeColumn);

    // Creates the <div> in the new ROW that will display the text input area
    let inputColumn = $("<div>").addClass("col-md-8");
    let input = $('<input type = "text">');
    input.addClass("input textarea");
    input.attr("id", workHours[i].hour);
    inputColumn.append(input);
    newRow.append(inputColumn);

    // Creates the <div> in the new ROW that will display the saveButton
    let buttonColumn = $("<div>").addClass("col-md-2");
    let saveButton = $("<button>").addClass("save-btn saveBtn");
    saveButton.attr("date-time", workHours[i].hour);
    saveButton.text("Save");
    buttonColumn.append(saveButton);
    newRow.append(buttonColumn);

    // Displays the new ROW (i.e. workHour, inputText, saveButton)
    container.append(newRow);

}