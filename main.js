// Calculator


// --- Document is Ready ---
document.addEventListener('DOMContentLoaded', function() {

	var numB = document.getElementsByClassName('num');
	var fab4 = document.getElementsByClassName('fab5');
	var single = document.getElementsByClassName('single');	

	for(i = 0; i < numB.length; i++) {
		numB[i].addEventListener('click', numberClicked);
	}

	for(i = 0; i < fab4.length; i++) {
		fab4[i].addEventListener('click', fabClicked);
	}

	for(i = 0; i < single.length; i++) {
		single[i].addEventListener('click', singClicked);
	}

});

// -- Click Handler for number buttons
function numberClicked(event) {
	var type = event.target.innerHTML;  // the clicked element
	console.log(type)
}

function fabClicked(event) {
	var type = event.target.id;
	switch(type) {
		case "multiply":
			multiply();
			break;
		case "divide":
			divide();
			break;
		case "add":
			add();
			break;
		case "subtract":
			subtract();
			break;
		case "equal":
			equal();
			break;
	}
}

function singClicked(event) {
	var type = event.target.id;
	switch(type) {
		case "reset":
			reset();
			break;
		case "sign":
			sign();
			break;
		case "percent":
			percent();
			break;
	}
}

function multiply() {
	console.log('mulitply');
}

function divide() {
	console.log('divide');
}

function subtract() {
	console.log('subtract');
}

function add() {
	console.log('add');
}

function equal() {
	console.log('equal');
}

function reset() {
	console.log('reset');
}

function sign() {
	console.log('sign');
}

function percent() {
	console.log('percent');
}
