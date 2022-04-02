var currentDate = moment().format("dddd, MMMM Do");
var currentDateDisplay = $("#currentDay");
currentDateDisplay.text(currentDate);
var saveBtn = $('.saveBtn')
var hour = $('.hour')
var rows = $('.row')


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
    var button = saveBtn[i]
    button.addEventListener('click', function(){
    localStorage.setItem("data" + i,rows[i].children[1].value)
    });
} 

for (let i = 0; i < rows.length; i++) {
    rows[i].children[1].textContent=localStorage.getItem('data' + i)
};

//TODO: Below is work in progress of color-time correlation
// //if currentday = row.hour red
// //else if currentday>hour green
// //else if currentday<hour gray 

// var timeNow = moment().format("H")

// // if (rows[i].children[0].textContent == currentDateDisplay
// //     rows[i].children[1]

//     var date = new Date();
// console.log(date.toLocaleString('en-US'));
// date.gethours()
// console.log(Date);

// var options = { hour12: false };
// console.log(date.toLocaleString('en-US', options));

// // var testers = gethours()
// // console.log(testers);