// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

 tagName: "table",
 className: '.lib_queue',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th class="list_title">Song Queue</th>').append(
      this.collection.map(function(song) {
             // console.log('song ', song);

        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});