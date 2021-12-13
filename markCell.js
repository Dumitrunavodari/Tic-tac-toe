function markCell(coordinates) {
  var player = document.getElementById("player").value;
  document.getElementById(coordinates).src = "pics/" + player + "Box.png";
  document.getElementById(coordinates).value = player
  document.getElementById("player").value = -player;
  return verification();
}
