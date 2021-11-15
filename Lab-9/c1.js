var start = new Date();

function stopTime() {
  var stop = new Date();
  var dif = ( (stop.getTime() - start.getTime()) / 600);
  alert("You have been on this page for: " + dif + " seconds");
}
