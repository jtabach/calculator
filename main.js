// Calculator

var displ;
var temp;
var operator;
// --- Document is Ready ---
document.addEventListener('DOMContentLoaded', function() {

	var numB = document.getElementsByClassName('num');
	var fab5 = document.getElementsByClassName('fab5');
	var single = document.getElementsByClassName('single');
	displ = document.getElementsByClassName('input')[0];
	var dec = document.getElementById('nDot');	

	for(i = 0; i < numB.length; i++) {
		numB[i].addEventListener('click', numberClicked);
	}

	for(i = 0; i < fab5.length; i++) {
		fab5[i].addEventListener('click', fabClicked);
	}
	for(i = 0; i < single.length; i++) {
		single[i].addEventListener('click', singClicked);
	}

	nDot.addEventListener('click', dotClicked);

});


var inp;

// -- Click Handler for number buttons and dot --
function numberClicked(event) {
	var type = event.target.innerHTML;  // the clicked element
	dis = type;
	console.log(type);
	appendNumToHead(type);
}

//  -- Click handler for mult div add sub equal --
function fabClicked(event) {
	var type = event.target.id
	operate(type);
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

function dotClicked() {
	type = event.target.innerHTML;
		displ.innerHTML += type;
}

function appendNumToHead(type) {
	console.log(displ);
	if (displ.innerHTML === "0") {
		displ.innerHTML = type;
	} else {
		console.log(type);
		displ.innerHTML += type;
	}
}

function operate(type) {
	if (type !== "equal") {
		operator = type;
		console.log(type);
		temp = Number(displ.innerHTML);
		displ.innerHTML = 0;
	} else {
		console.log(type);
		inp = Number(displ.innerHTML);
		console.log(operator);
		switch(operator) {
			case "multiply":
				displ.innerHTML = temp * inp;
				break;
			case "divide":
				displ.innerHTML = temp / inp;
				break;
			case "subtract":
				displ.innerHTML = temp - inp;
				break;
			case "add":
				displ.innerHTML = temp + inp;
				break;
			
		}
		
		
	}
}



function reset() {
	console.log('reset');
	displ.innerHTML = 0;
	temp = 0;
	imp = 0;
}

function sign() {
	console.log('sign');
}

function percent() {
	console.log('percent');
}
