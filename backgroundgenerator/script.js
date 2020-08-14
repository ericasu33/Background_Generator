var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".random");
var body = document.getElementById("gradient");

body.onload = setGradient();

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.innerHTML = body.style.background + ";";

	if (color1.value === "#000000" || color2.value === "#000000") {
		body.style.color = "#FFF";
	} else {
		body.style.color = "rgba(0,0,0,.5)";
	}
}

function randomColor(){
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	return "#" + randomColor;
}

function randomBg() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
};


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomBg);
