const Song = require('./javascripts/classes/song.js').default
const Playlist = require('./javascripts/classes/playlist.js').default
const Favorite = require('./javascripts/classes/favorite.js').default
document.addEventListener('DOMContentLoaded', init);

function init(){
  document.getElementById('favoritesBtn').addEventListener('click', displayFavoritesPage);
  document.getElementById('playlistsBtn').addEventListener('click',displayPlaylistsPage);
  document.getElementById("searchBtn").addEventListener("click", searchArtistTracks);
  document.getElementById('playlistsBtn').addEventListener('click', getPlaylists)
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
    let artistName = document.getElementById('searchField').value;
    fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artistName}&page_size=10&page=1&s_track_rating=desc&apikey=d54f2a729ccc9c98bfdf337e42a89ce9`
    )
    .then(response => response.json())
    .then(artistInfo =>  {
      var trackArr = artistInfo["message"]["body"]["track_list"]
      displaySearchResults(trackArr);
    })
    .catch(error => console.log({error}))
}

const getPlaylists = () => {
  fetch(`https://vast-crag-31836.herokuapp.com/api/v1/playlists`)
  .then(response => response.json())
  .then(playlists => {
    playlists.forEach(function(playlistData) {
      let playlist = new Playlist(playlistData)
      console.log(playlist)
    })
  })
  .catch(error => console.log({error}))
}

const displaySearchResults = (trackArr) => {
  let songs = document.querySelectorAll('.search-song-data')
  let artists = document.querySelectorAll('.search-artist-data')
  let albums = document.querySelectorAll('.search-album-data')
  let buttons = document.querySelectorAll('.add-favorite-btn')

  songs.forEach(function(song) { song.parentNode.removeChild(song);})
  artists.forEach(function(artist) { artist.parentNode.removeChild(artist);})
  albums.forEach(function(album) { album.parentNode.removeChild(album);})
  buttons.forEach(function(button) { button.parentNode.removeChild(button);})

  trackArr.forEach(function(track) {
    let song = new Song(track)
    console.log(song)
    $(`#searchTable`).append(`
      <p class='search-song-data'>${song.name}</p>
      <p class='search-artist-data'>${song.artist}</p>
      <p class='search-album-data'>${song.album}</p>
      <p class='add-favorite-btn'>
        <i class='fas fa-plus'></i>
      </p>
      `)
      document.getElementById('welcomePage').style.display = 'none'
      document.getElementById('favoritesPage').style.display = 'none'
      document.querySelector('.below-nav').style.height = '79vh'
      document.getElementById('searchResultPage').style.display = 'block'
  })
}
