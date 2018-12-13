export default class Favorite {
  constructor(data) {
    this.name = data['song_title']
    this.artist = data['artist_name']
    this.genre = data['genre']
    this.song_rating = data['song_rating']
    this.album = ['Experiment', 'The Wall', 'Bad', 'Supernatural', 'Legend', 'Rumours', 'Dark Side of the Moon'][Math.floor(Math.random()*7)]
  }
}
