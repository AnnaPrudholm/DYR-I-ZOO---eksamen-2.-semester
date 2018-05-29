// JavaScript Document

var correct = ["Elefant","Giraf","Søløve","Løve","Chimpanse","Slange"];

$(document).ready(function() {
	// Går igennem hvert element med .card img
	$(".card img").each(function() {
		// Undlad af markere når man trækker elementer rundt
		$(this).disableSelection();
	});

	$("ul li").disableSelection();
	
	
	$("#quiz").sortable({
		helper: "clone", // element følger musen mens man flytter
		revert: "invalid" // sikre du slipper elementet det rigtige sted
	});
	
	// På tryk af knap, nulstil
	$("#reset").click(function() {
		reset();
	});
	
	


// På tryk af knap, tjek resultatet
$("#result").click(function() {
	// Henter elementer fra listen
	var ul = document.getElementById("quiz");
	
	// Gå igennem hvert enkelt element i listen
	for (var i = 0; i <= ul.children.length-1; i++) {
		// Tjekker op på positionen om svaret er samme position som correct[] array
		if (ul.children[i].getAttribute("data-val") === correct[i]) {
			ul.children[i].style.color = "green";
		} else {
			ul.children[i].style.color = "red";
		}
	}
});
	
	// Udgangspunkt i at elementerne er byttet rundt
	reset();
});



function reset() {
	// Henter elementer fra listen
	var ul = document.getElementById("quiz");
	
	// Gå igennem hvert enkelt element i listen
	for (var i = 0; i <= ul.children.length-1; i++) {
		// angiv tilfældig position
		ul.children[i].style.color = "#454545";
		
		// nulstil farve
		ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}