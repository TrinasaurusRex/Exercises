$(document).ready(function() {

	//$('div').text("Hello World");
	$('div').html("<h1>I'm Bigger</h1>");
	var text = "new text string";
	$("div").append(text);
	$("button").on("click", function () {
		$("div").toggleClass("highlight");
	});
	
	
});





//window.onload = function() {

// document.getElementById("calculate").onclick = calculatePledge;

// function calculatePledge() {
// 	var num1 = document.getElementById("value1").value;
// 	var num2 = document.getElementById("value2").value;
// 	var result = num1 * num2;

// 	var text;

// 	if (result > 1000){
// 		text = "Hey, big spender";
// 	}else if (result > 100){
// 		text = "Thank you muchly";
// 	}else {
// 		text = "Every bit counts!";
// 	}

// 	document.getElementById("calculation").innerHTML = "$" + result + " (" + text + ")";
// }
// 	var happy = ":D";
// 	var nervous = ":|";
// 	var cool = "8)";
// 	var mood = document.getElementById("mood");

// 	document.getElementById("happy").onclick = function() {
// 	 	mood.innerHTML = happy;
// 	  	mood.style.color = "orange";
// 	};

// 	document.getElementById("nervous").onclick = function() {
// 		mood.innerHTML = nervous;
// 		mood.style.color = "black";
// 	};

// 	document.getElementById("cool").onclick = function() {
// 	 	mood.innerHTML = cool;
// 	 	mood.style.color = "blue";
// 	};
//}
