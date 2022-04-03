var currentDate = moment().format("dddd, MMMM Do");
var currentDateDisplay = $("#currentDay");
currentDateDisplay.text(currentDate);
var saveBtn = $(".saveBtn");
var hour = $(".hour");
var rows = $(".row");

// saveBtn.on('click', function () {
//     var textElement = $(this).siblings('.description').val();
//     var blockTime = $(this).parent().parent().attr("id");
//     console.log(blockTime);
//     console.log(textElement);
//     localStorage.setItem(blockTime, textElement);
// })
// $('.text .description').val(localStorage.getItem('hour-9'));
// localStorage.setItem('input', textArea.val());
// console.log(textArea.val());

// for (var i=0; i<9 hour.length; i++;

for (let i = 0; i < rows.length; i++) {
  var button = saveBtn[i];
  button.addEventListener("click", function () {
    localStorage.setItem("data" + i, rows[i].children[1].value);
  });
}

for (let i = 0; i < rows.length; i++) {
  rows[i].children[1].textContent = localStorage.getItem("data" + i);
}

//TODO: Below is work in progress of color-time correlation
// //if currentday = row.hour red
// //else if currentday>hour green
// //else if currentday<hour gray

// var timeNow = moment().format("H")

// // if (rows[i].children[0].textContent == currentDateDisplay
// //     rows[i].children[1]

var d = new Date();
let currentTime = d.getHours();
var options = {
  hour: "numeric",
  hour12: true,
};
var timeInt = parseInt(currentTime.toLocaleString("en-US", options));
// if ( < currentTime) {
//   alert ("is b4 tin")
// } else {
//   alert ("benwaswrong")
// }

for (let i = 0 ; i < rows.length; i++) {
  var rowInt = parseInt(rows[i].id)
  if (rowInt > timeInt){
    rows.addClass("future");
  } 
  if (rowInt < timeInt){
    rows.addClass("past");
  }
  if (rowInt == timeInt){
    rows.addClass("present");
  }
}


// console.log(currentTime);
// var calendarTime = document.getElementsByClassName(".hour").innerHTML;
// // for ()
// for (let i = 0; i < calendarTime.length; i++) {
//   if (calendarTime[i] === timeString) {
//     console.log("hey");
//   }
//   else if (calendarTime[i] > timeString) {
//     console.log("yo");
//   }

//   else (calendarTime[i] === timeString); {
//     alert("hey");
//   }
// }

// for (let i = 0; i < calendarTime.length; i++)
//   if (calendarTime=== timeString) {
//   console.log("hey");}

// if {(calendarTime === timeString);
// else if {(calendarTime < timeString);
// console.log("yes");}
// else {(calendarTime>timeString);
//     console.log("yippee");}
// }
// } else if { (rows[i].children[0].innerHTML > currentTime)
// console.log(currentTime);
// } else { (rows[i].children[0].innerHTML < currentTime)
// console.log(5)};
// } else { calendarTime < timeString
//     console.log("yip");
// }