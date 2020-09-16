// Displays 'Day of Week', 'Month' & 'Day' & 'Year', 'Current Time' at the top of the page
let currentTime = moment().format("dddd, MMM Do YYYY, HH:mm A");
$("#currentDay").text(currentTime);


// Puts currentTime components into an array
let array = [];
array.push(currentTime);
console.log("Current time: " + array);


// Splits the currentTime components into three: day, date, time
let timeCompare = " ";
timeCompare = currentTime.split(", ");
console.log("Split current time: " + timeCompare);
console.log("Hour Only #: " + timeCompare[2]);


// Splits the time component and store just the hour 05, 06, etc
let hourCompare = [];
hourCompare = timeCompare[2].split(":");
console.log("hourCompare Variable: " + hourCompare[0]);

// Array of work hours
let workHours = [
    {
        hour: "07",
        minutes: ":00 AM"
    },
    {
        hour: "08",
        minutes: ":00 AM"
    },
    {
        hour: "09",
        minutes: ":00 AM"
    },
    {
        hour: "10",
        minutes: ":00 AM"
    },
    {
        hour: "11",
        minutes: ":00 AM"
    },
    {
        hour: "12",
        minutes: ":00 PM"
    },
    {
        hour: "13",
        minutes: ":00 PM"
    },
    {
        hour: "22",
        minutes: ":00 PM"
    },
    {
        hour: "23",
        minutes: ":00 PM"
    },
    {
        hour: "24",
        minutes: ":00 PM"
    }
];


// Links to the 'container' <div> on the html. ***Delete CLASS***
let container = $(".container")//.addClass("past");

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

    // Evalutes the current time commpared to the "row time" and color codes accordingly as past, present, future
    if (parseInt(workHours[i].hour) < parseInt(hourCompare)) {
        input.addClass("past");
    } else if (parseInt(workHours[i].hour) === parseInt(hourCompare)) {
        input.addClass("present");
    } else if (parseInt(workHours[i].hour) > parseInt(hourCompare)) {
        input.addClass("future");
    }
};

// Saves the input entered in the text area to local storage
$(".save-btn").on("click", function () {
    let inputStored = $(this).parent().siblings(".col-md-8").children(".input.textarea").val();
    let time = $(this).attr("date-time")
    console.log(inputStored)
    console.log(time);
    localStorage.setItem(time, inputStored);
});

// Retrieves the local storage and writes it to the specified time block
$(".input.textarea").each(function () {
    let savedInput = $(this).parent(".col-md-8").siblings(".col-md-2").children(".save-btn").attr("date-time");
    let savedInfo = localStorage.getItem(savedInput);
    $(this).val(savedInfo);
});
