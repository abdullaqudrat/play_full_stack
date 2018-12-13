const Song = require('./javascripts/classes/song.js').default

document.addEventListener('DOMContentLoaded', init);

function init(){
  document.getElementById('favoritesBtn').addEventListener('click', displayFavoritesPage);
  document.getElementById('playlistsBtn').addEventListener('click',displayPlaylistsPage);
  document.getElementById("searchBtn").addEventListener("click", searchArtistTracks);
};

const displayFavoritesPage = () => {
  // Remove view of these pages
  document.getElementById('welcomePage').style.display = 'none'
  document.getElementById('searchResultPage').style.display = 'none'
  document.getElementById('playlistsPage').style.display = 'none'
  // View this page instead
  document.getElementById('favoritesPage').style.display = 'block'
  document.querySelector('.below-nav').style.height = '79vh'
}

const displayPlaylistsPage = () => {
  // Remove view of these pages
  document.getElementById('welcomePage').style.display = 'none'
  document.getElementById('searchResultPage').style.display = 'none'
  document.getElementById('favoritesPage').style.display = 'none'
  // View this page instead
  document.getElementById('playlistsPage').style.display ='grid'
  document.querySelector('.below-nav').style.height = '85vh'

}

const searchArtistTracks = () => {
  event.preventDefault()
    let artistName = document.getElementById('search-field').value;
    fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artistName}&page_size=3&page=1&s_track_rating=desc&apikey=d54f2a729ccc9c98bfdf337e42a89ce9`
    )
    .then(response => response.json())
    .then(artistInfo =>  {
      var trackArr = artistInfo["message"]["body"]["track_list"]
      displaySearchResults(trackArr);
    })
    .catch(error => console.log({error}))
}

const displaySearchResults = (trackArr) => {
  trackArr.forEach(function(track) {
    let song = new Song(track)
    console.log(song)
    $(`#searchResultPage`).append(`
      <div class='song-artistName'>${song.name}</div>
      <div class='album-name'>${song.album}</div>
      `)
  })
}
