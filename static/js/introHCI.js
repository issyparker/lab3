'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
console.log('some_string')
$('#myElement').click(changeText);

function changeText(event){
	$(this).text("Changed text");
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
console.log('some_string')
$('#myElement').click(changeText);

function changeText(event){
	$(this).text("Changed text");
}
}