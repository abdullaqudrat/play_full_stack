
// console.log("hi")

console.log(apiKey)

const findArtist = () => {
  fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin_bieber&page_size=3&page=1&s_track_rating=desc&apikey=${apiKey}`
  )
  .then(response => response.json())
  .then(artistInfo =>  console.log(artistInfo))
  .catch(error => console.log({error}))
}

findArtist()
