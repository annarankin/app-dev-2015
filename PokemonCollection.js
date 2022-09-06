var PokemonCollection = Backbone.Collection.extend({
  model: Pokemon,
  filterByName: function (regex) {
    var filtered = this.filter(function (pokemon) {
      return pokemon.get("name").match(regex);
    });
    return new PokemonCollection(filtered);
  },
});
