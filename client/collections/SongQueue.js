// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({



  initialize: function() {
    this.on('add', this.addSong, this);
    this.on('dequeue', this.remove, this);
    this.on('ended', this)
  },
  

  addSong: function(title) {
    if(this.length === 1){
      this.playFirst();
    }
  },

  remove: function (song) {
    if (this.at(0) === song) {
      this.playFirst();
    }
    this.remove()
  },
  
  playFirst: function() {
    this.at(0).play();
  }


});