function addOutput(){
  var add1 = document.getElementById("add1");
  var add2 = document.getElementById("add2");
  var addAns = Number(add1.value) + Number(add2.value);
  document.getElementById("addOutput").innerHTML = addAns;
}
