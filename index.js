var name = prompt("what is your name?");
var firstChar = name.slice(0,1);
var upperCaseChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var CapitalizeName= upperCaseChar+restOfName;
alert("hello, "+CapitalizeName+" welcome to our website");
