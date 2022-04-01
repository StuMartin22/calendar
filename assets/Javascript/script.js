var currentDate = moment().format("dddd, MMMM Do");
var currentDateDisplay = $("#currentDay");
currentDateDisplay.text(currentDate);
var saveBtn = $('#saveBtn')
var textArea = $('.text')
var hour = $('.hour')


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