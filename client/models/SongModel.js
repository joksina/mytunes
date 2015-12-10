// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function() {
    localStorage.setItem(this.get('title'), + localStorage.getItem(this.get('title')) + 1);
    this.set('playCount', localStorage.getItem(this.get('title')));
    this.trigger('ended', this);

  }

});
