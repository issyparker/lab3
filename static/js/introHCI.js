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
		$('.jumbotron h1').text("Hey There :)");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	$("a.thumbnail").click(projectClick);
	// example: $("#div-id").click(functionToCall);\console.log('some_string')
}

$('#myElement').click(changeText);
function changeText(event){
	$(this).text("Changed text");
}

function projectClick(e){
	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00")
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length ==0){
		$(containingProject).append("<div class = 'project-description'><p>Description of the project.</p></div>");
	} else{
		$(containingProject).hide();
	}
}
