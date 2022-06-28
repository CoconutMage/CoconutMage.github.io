function revealMessage()
{
	document.getElementById("hiddenMessage").style.display = 'block';
}
function countUp()
{
	var currentVal = document.getElementById("counterText").innerHTML;
	var newVal = currentval - 1;
	document.getElementById("counterText").innerHTML = newVal;
}
function countDown()
{
	var currentVal = document.getElementById("counterText").innerHTML;
	var newVal = currentVal - 1;
	document.getElementById("counterText").innerHTML = newVal;
}