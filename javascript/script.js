fSide = []
sSide = []
tSide = []
fSide.push(prompt('enter the first side of the triangle '));
sSide.push(prompt('enter the second side of the triangle '));
tSide.push(prompt('enter the third side of the triangle '));
var fstr = fSide.toString();
var sstr = sSide.toString();
var tstr = tSide.toString();

if (fstr === sstr && sstr === tstr && fstr  === tstr)
	{
	alert('this is an equilateral triangle');
	}
else if(fstr+sstr <= tstr || fstr+tstr <= sstr || tstr+fstr <= sstr)
  {
  alert('this is not a triangle')
  }
else if (fstr === sstr || sstr === tstr || fstr  === tstr)
	{
	alert ('this is an isosceles triangle')
	}
else if (fstr !== sstr && sstr !== tstr && fstr  !== tstr)
  {
	alert('this is an scalene triangle')
  }
