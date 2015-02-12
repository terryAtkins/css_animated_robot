
// move robot left or right, controlled by slider
function moveRobot(value) {
	
	if (value == 2) {
		$(".robot").animate({left: "610",}, 3000);
		$(".right").toggleClass("raiseArm");
	
	} else  {
		$(".robot").animate({left: "100",}, 3000);
		$(".right").toggleClass("raiseArm");
	}
		
}

// when the jump button clicked, make the robot jump
function robotJump() {
	$(".robot").animate({top: "0",}, 200, function() {
		$(this).animate({top: "30",}, 200);
	});
	
}

// change colour when selected fro drop down menu
function changeColour() {
	var colour = $(".colours").val(); 
	$(".torso").css({"border-top-color" : colour});
	$(".brain").css("background-color", colour);
}

// turn eyes red when button clicked
$(".eyes").click(function() {
	$(".brain").toggleClass("evil");
});

//raise arm;
$(".right").click(function() {
	$(".brain").toggleClass("evil");
});