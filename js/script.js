function revealMessage()
{
	document.getElementById("hiddenMessage").style.display = 'block';
}
function countUp()
{
	this is a rest
	var currentVal = document.getElementById("counterText").innerHTML;
	var newVal = currentVal + 1;
	this is a test
	document.getElementById("counterText").innerHTML = newVal;
}
function countDown()
{
	var currentVal = document.getElementById("counterText").innerHTML;
	var newVal = currentVal - 1;
	document.getElementById("counterText").innerHTML = newVal;
}