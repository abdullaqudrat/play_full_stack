const Song = require('./javascripts/classes/song.js').default
const Playlist = require('./javascripts/classes/playlist.js').default
const Favorite = require('./javascripts/classes/favorite.js').default
document.addEventListener('DOMContentLoaded', init);

function init(){
  document.querySelector('.logo').addEventListener('click', displayWelcomePage)
  document.getElementById('favoritesBtn').addEventListener('click', displayFavoritesPage);
  document.getElementById('playlistsBtn').addEventListener('click',displayPlaylistsPage);
  document.getElementById("searchBtn").addEventListener("click", searchArtistTracks);
  document.getElementById('playlistsBtn').addEventListener('click', getPlaylists)
};

<<<<<<< HEAD
const displayWelcomePage = () => {
  document.getElementById('favoritesPage').style.display = 'none'
  document.getElementById('searchResultPage').style.display = 'none'
  document.getElementById('playlistsPage').style.display = 'none'

  document.getElementById('welcomePage').style.display = 'block'
  document.querySelector('.below-nav').style.height = '64vh'
=======
const addToFavorites = (track) => {
  let genres = ["rock", "pop", "rap", "misc"]

  fetch("https://vast-crag-31836.herokuapp.com/api/v1/favorites",
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({song_title: track.name, 
      artist_name: track.artist, 
      genre: genres[Math.floor(Math.random()*genres.length)], 
      song_rating: track.songRating})
    })
    .then(response => {
      console.log(response)
      if (response.status == 201) {
        document.getElementById('notice').innerText = `You favorited ${track.name} by ${track.artist}`
      }
    })
>>>>>>> cfc1ba10ca090b8bd513ed191afed442c5c04fc7
}

const displayFavoritesPage = () => {
  document.getElementById('welcomePage').style.display = 'none'
  document.getElementById('searchResultPage').style.display = 'none'

  document.getElementById('notice').innerText = ''

  document.getElementById('playlistsPage').style.display = 'none'

<<<<<<< HEAD
=======
  // View this page instead
>>>>>>> cfc1ba10ca090b8bd513ed191afed442c5c04fc7
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
  $('#playlistsPage').html('');
  fetch(`https://vast-crag-31836.herokuapp.com/api/v1/playlists`)
  .then(response => response.json())
  .then(playlists => {
    playlists.forEach(function(playlistData) {
      playlist = new Playlist(playlistData)
      $(`#playlistsPage`).append(`
        <div class='playlist-label-container'>
          <h3 class='playlist-label'>${playlist.name}
          </h3>
          <i style='display: inline' class='fas fa-trash-alt'></i>
        </div>
        <div id='p-${playlist.id}'class='playlist-grid table'>
        `)
      playlist.favorites.forEach(function(favoriteData) {
        let favorite = new Favorite(favoriteData)
        $(`#p-${playlist.id}`).append(`
          <p class='fave-song'>${favorite.name}</p>
          <p class='fave-artist'>${favorite.artist}</p>
          <p class='fave-album'>${favorite.album}</p>
          <p class='add-btn'>
            <i class='fas fa-plus'></i>
          </p>
          `)
      })
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
      <p class="add-favorite-btn" id="${song.id}" >
        <i class='fas fa-plus'></i>
      </p>
      `)
      document.getElementById('notice').innerText = ''
      document.getElementById('welcomePage').style.display = 'none'
      document.getElementById('favoritesPage').style.display = 'none'
      document.querySelector('.below-nav').style.height = '79vh'
      document.getElementById('searchResultPage').style.display = 'block'

      let button = document.getElementById(`${song.id}`)
      button.addEventListener('click', function(){
        addToFavorites(song);
      }, false);
  })
}
