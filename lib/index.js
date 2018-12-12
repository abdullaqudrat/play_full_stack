const Song = require('./javascripts/classes/song.js').default
// console.log("hi")


const findArtist = () => {
  fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin_bieber&page_size=3&page=1&s_track_rating=desc&apikey=${apiKey}`
  )
  .then(response => response.json())
  .then(artistInfo =>  {
    console.log(artistInfo["message"]["body"]["track_list"])
    var trackArr = artistInfo["message"]["body"]["track_list"]
    console.log(trackArr)
    trackArr.forEach(function(trackData) {
      // console.log(trackData["track"]["track_name"])
      // console.log(trackData["track"]["album_name"])
      let song = new Song(trackData)

      console.log(song)
    })
  })
  .catch(error => console.log({error}))
}

findArtist()

// response.body
