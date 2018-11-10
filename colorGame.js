var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var rButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy" ? numSquares = 3: numSquares=6;
		reset();
	});
  }
}

function setupSquares(){
	for (var i = 0;  i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		//if user correct
		if(clickedColor === pickedColor){
			messageDisplay.textContent= "Correct";
			rButton.textContent= "Play again?";
			changeColors(clickedColor);
			h1.style.background= clickedColor;
		}else{//when user guesses incorrectly
			this.style.background="#232323"; 
			messageDisplay.textContent= "Try again";
			}
		});
	}
}


function reset(){
	colors=generateRandomColors(numSquares);

	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	rButton.textContent="New Colors";
	messageDisplay.textContent= "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
		squares[i].style.display="block";	
		squares[i].style.background=colors[i];
	}else{
		squares[i].style.display= "none";
	}
  }
	h1.style.background="steelblue";
}

rButton.addEventListener("click", function(){
	reset();
})

// start of funtion changeColor
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}
//start of the function pickColor
function pickColor(color){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//start of generateRandomColors
function generateRandomColors(num){
	var arr=[];

	for (var i = 0; i < num; i++) { //repeat num times
		//get random color from rgb
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//red
	var r = Math.floor(Math.random()*256);
	//green
	var g = Math.floor(Math.random()*256);
	//blue
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

		