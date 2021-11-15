var dateNow = new Date();

var yearNow = dateNow.getFullYear();

var ageNow = prompt("What is your age?");

document.getElementById("yearHere").innerHTML = yearNow - ageNow;
