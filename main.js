var ENTER_KEY = 13;

console.log("Hemlo world");
$(document).ready(function () {
  var app = new PokemenView();
  loadPokemon(app);
  var $input = $("#search-box");
  $input.keypress(function (event) {
    if (event.which == ENTER_KEY) {
      searchForPokemon(event.target.value, app);
    }
  });
});

function loadPokemon(app) {
  $.ajax("https://pokeapi.co/api/v2/pokemon-species/?limit=1000")
    .done(function (response) {
      app.initialCollection = new PokemonCollection();

      response.results.forEach(function (pokemon) {
        app.initialCollection.add(new Pokemon(pokemon));
      });
      app.render();
    })
    .fail(function () {
      return [];
    })
    .always(function (resp) {
      console.log("always", resp);
    });
}

function searchForPokemon(search, app) {
  var reggie = new RegExp(search, "i");
  app.collection = app.initialCollection.filterByName(reggie);
  app.render();
}
