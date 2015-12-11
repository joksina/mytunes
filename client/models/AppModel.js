// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // this.set(library)


    // if localstorage !null
      // each(localstorage.songqueue, function(song) {
        // this.get('songQueue').add(song);
      // })
    var addLocalSto = function(song) {
      var localArr = [];
      if (localStorage.songQ) {
        localArr = JSON.parse(localStorage.songQ);
      }
      localArr.push(song);
      localStorage.songQ = JSON.stringify(localArr);
    };

    var removeLocalSto = function(song, that) {
      var songIndex = that.get('songQueue').indexOf(song);
      console.log('i: ', songIndex);

      var localArr = JSON.parse(localStorage.songQ)
      console.log('locQ1: ', localArr);

      localArr.splice(songIndex, 1);
      localStorage.songQ = JSON.stringify(localArr);
      console.log('locQ2: ', localArr);
      return song;
    }

    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);
    params.library.on('enqueue', function(song) {
      addLocalSto(song);
      // console.log('lsto en: ', localStorage.songQ);
      this.get('songQueue').add(song);
    }, this);
    params.library.on('dequeue', function(song) {
      removeLocalSto(song, this);
      this.get('songQueue').remove(song);
      }, this);
    this.get('songQueue').on('stop', function(song) {
      this.set('currentSong', null);
    }, this);
    },
});


// params.library.on('play', function(song) {
//       this.set('currentSong', song);
//     }, this);
//     params.library.on('enqueue', function(song) {
//       var queue = this.get('songQueue');
//       console.log('q: ', queue);
//       queue.push(song);
//       this.set('songQueue', song);
//     }, this);
//     this.get('songQueue').on('stop', function(song) {
//       this.set('currentSong', null);
//     }, this);
//   }

// });