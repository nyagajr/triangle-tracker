var msg = function (){

//fSide = []
//sSide = []
//tSide = []
//fSide = document.getElementById("intro");
//sSide.push(prompt('enter the second side of the triangle '));
//tSide.push(prompt('enter the third side of the triangle '));
var fstr = document.getElementById("num1").value;
var sstr = document.getElementById("num2").value;
var tstr = document.getElementById("num3").value;

if (fstr > 0 && sstr > 0 && tstr > 0){
if (fstr === sstr && sstr === tstr && fstr  === tstr)
	{
	alert('this is an equilateral triangle');
}
else if (fstr === sstr || sstr === tstr || fstr === tstr)
{
  alert("This is an Isosceles triangle")
}
else {
  alert("this is definitely a scalene triangle");
}
}
else
{
  alert("Triangle values can only be greater than 0");
}
};
