//Slider.
var myVar;

let load = () => myVar = setTimeout(showpage, 3000);

let showpage = () => {
	document.getElementById("loader").style.display = "none";
	document.getElementById("body").style.display = "block";
}
//Goals.
var goal1 = "<p id=example-txt>The goal is to optimize customer satisfaction at all costs while also paying attention to the latest web development trends.</p>";
		var goal2 = "<p id=example-txt>To create an effective website with dazzling design while also paying attention to responsiveness and user interaction.</p>";
		var goal3 = "<p id=example-txt>To work creatively and giving my best to ensure that web pages are efficiently completed at all costs. </p>"
		function change() {
			document.getElementById("example").innerHTML = goal1;
		}
		function change1() {
			document.getElementById("example").innerHTML = goal2;
		}
		function change2() {
			document.getElementById("example").innerHTML = goal3;
		}
function scroll() {
	document.getElementById("tip").style.opacity = "1";
}
//Adding smooth scrolling to all links.
$("a").on('click', function(event) {
	
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
	}
});