const Song = require('./javascripts/classes/song.js').default
// console.log("hi")


const findArtist = () => {
  fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin_bieber&page_size=3&page=1&s_track_rating=desc&apikey=${apiKey}`
  )
  .then(response => response.json())
  .then(artistInfo =>  {
    var trackArr = artistInfo["message"]["body"]["track_list"]

    trackArr.forEach(function(trackData) {
      let song = new Song(trackData)
      console.log(song)
      $(`#searchResultPage`).append(`
        <div class='song-name'>${song.name}</div>
        `)
    })
  })
  .catch(error => console.log({error}))
}

findArtist()

// response.body
