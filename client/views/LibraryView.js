// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    // alternate ==> this.$el.children().remove();


    this.$el.html('<th>Library</th>').append(
    // alternate ==> this.$el.append( function() { return '<th>Library</th> ' } ).append(
      this.collection.map(function(song) {
            console.log('song ', song);
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
