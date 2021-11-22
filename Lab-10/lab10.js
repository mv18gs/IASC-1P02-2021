var inputA = document.getElementById("inputA");
var inputB = document.getElementById("inputB");

function sum() {
  var answerOutput = Number(inputA.value) + Number(inputB.value);
  document.getElementById("answerOutput").innerHTML = answerOutput;
}

function difference() {
  var answerOutput = Number(inputA.value) - Number(inputB.value);
  document.getElementById("answerOutput").innerHTML = answerOutput;
}

function product() {
  var answerOutput = Number(inputA.value) * Number(inputB.value);
  document.getElementById("answerOutput").innerHTML = answerOutput;
}

function quotient() {
  var answerOutput = Number(inputA.value) / Number(inputB.value);
  document.getElementById("answerOutput").innerHTML = answerOutput;
}
