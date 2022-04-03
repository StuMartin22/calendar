var currentDate = moment().format("dddd, MMMM Do");
var currentDateDisplay = $("#currentDay");
currentDateDisplay.text(currentDate);
var saveBtn = $(".saveBtn");
var hour = $(".hour");
var rows = $(".row");

for (let i = 0; i < rows.length; i++) {
  var button = saveBtn[i];
  button.addEventListener("click", function () {
    localStorage.setItem("data" + i, rows[i].children[1].value);
  });
}

for (let i = 0; i < rows.length; i++) {
  rows[i].children[1].textContent = localStorage.getItem("data" + i);
}

var d = new Date();
let currentTime = d.getHours();
var options = {
  hour: "numeric",
  hour12: true,
};
var timeInt = parseInt(currentTime.toLocaleString("en-US", options));

for (let i = 0; i < rows.length; i++) {
  var rowInt = parseInt(rows[i].id);
  if (rowInt > timeInt) {
    rows.addClass("future");
  }
  if (rowInt < timeInt) {
    rows.addClass("past");
  }
  if (rowInt == timeInt) {
    rows.addClass("present");
  }
}
