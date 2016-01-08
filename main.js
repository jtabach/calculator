// Calculator


// --- Document is Ready ---
document.addEventListener('DOMContentLoaded', function() {

	var numB = document.getElementsByClassName('num');
	console.log(numB);
		
	for(i = 0; i < numB.length; i++) {
		numB[i].addEventListener('click', numberClicked);
	}


});

// -- Click Handler for number buttons
function numberClicked(event) {
  		var button = event.target.innerHTML;  // the clicked element
  		console.log(button)
	}