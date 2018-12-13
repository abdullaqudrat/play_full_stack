export default class Favorite {
  constructor(data) {
    this.name = data['song_title']
    this.artist = data['artist_name']
    this.genre = data['genre']
    this.song_rating = data['song_rating']
  }
}
