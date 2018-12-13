document.addEventListener('DOMContentLoaded', init);

function init(){
  document.getElementById('favoritesBtn').addEventListener('click', displayFavoritesPage);
};

const displayFavoritesPage = () => {
  // Remove view of these pages
  document.getElementById('welcomePage').style.display = 'none'
  document.getElementById('searchResultPage').style.display = 'none'
  document.getElementById('welcomePage').style.display = 'none'
  // View this page instead
  document.getElementById('favoritesPage').style.display = 'block'
  document.querySelector('.below-nav').style.height = '79vh'
}


const Song = require('./javascripts/classes/song.js').default
// console.log("hi")
// $('#searchBtn').click(function() {
//   let artistName = $('#searchField').val();
//   findArtist(artistName)
// })

  // function init(){
      document.getElementById("searchBtn").addEventListener("click", displaySearchResult);

  // }
  // window.onload = init;


const displaySearchResult = () => {
  // let artistName = document.getElementById('searchField').value;
  // findArtist('the_beatles')
  // let artistName = $('#searchField').val();
  //   findArtist(artistName)
    let artistName = document.getElementById('searchField').value;
    findArtist(artistName)
    // alert(artistName);
}
// displaySearchResult()

var artistName = 'wood_brothers'


const findArtist = (name) => {
  event.preventDefault()
  $(`#searchResultPage`).append(`
       <div class='song-name'>it</div>
       <div class='album-name'>worked</div>
       `)
  // fetch(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${name}&page_size=3&page=1&s_track_rating=desc&apikey=${apiKey}`
  // )
  // .then(response => response.json())
  // .then(artistInfo =>  {
  //   var trackArr = artistInfo["message"]["body"]["track_list"]
  //
  //   trackArr.forEach(function(trackData) {
  //     let song = new Song(trackData)
  //     console.log(song)
  //     $(`#searchResultPage`).append(`
  //       <div class='song-name'>${song.name}</div>
  //       <div class='album-name'>${song.album}</div>
  //       `)
  //   })
  // })
  // .catch(error => console.log({error}))
}

// findArtist(artistName)

// response.body
