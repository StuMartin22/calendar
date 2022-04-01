var currentDate = moment().format("dddd, MMMM Do");
var currentDateDisplay = $("#currentDay");
currentDateDisplay.text(currentDate);
var saveBtn = $('#saveBtn')
var textArea = $(textArea)

saveBtn.on('click', function createItem() {
	localStorage.setItem('text','#text'); 
} );
createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'

function getValue() {
	return localStorage.getItem('nameOfItem');  
} // Gets the value of 'nameOfItem' and returns it
console.log(getValue()); //'value';

// $('.saveBtn').on('click', function () {
//     var textElement = $(this).siblings('.description').val();
//     var blockTime = $(this).parent().parent().attr("id");
//     console.log(blockTime);
//     console.log(textElement);
//     localStorage.setItem(blockTime, textElement);
// })
// $('#hour-9 .description').val(localStorage.getItem('hour-9'));