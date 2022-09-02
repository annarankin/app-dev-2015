var PokemonView, PokemenView
$(document).ready(function () {
  PokemonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#pokemon-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

PokemenView = Backbone.View.extend({
  el: '#results',
  initialize: function() {
    this.collection = new PokemonCollection;
    this.collection.add(new Pokemon({name: 'Pika', number: 234}))
    this.render()
  },
  render: function() {
    // clear the HTML out of our root element
    this.$el.html('')

    // Put more html in it
    this.collection.each(function(monster) {
      var poke = new PokemonView({
        model: monster
      });

      this.$el.append(poke.render().el);
    }.bind(this));
  }
});
})