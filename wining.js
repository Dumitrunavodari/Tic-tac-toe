function wining (sum) {
  document.getElementById("gameCard").remove();
  mainCard.innerHTML +='\
    <div class="card-header" id="gameCard">\
      <img src="'+sum+'winner.png" id ="picture" class="rounded mx-auto d-block" alt="picture">\
      <div class="card-header" id="buttonCard">\
        <a href="#" class="btn btn-outline-dark" onclick="return location.reload();">Play again</a>\
      </div>\
    </div>';
  return false;
}
