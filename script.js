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