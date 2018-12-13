export default class Song {
  constructor(data) {
    this.id = data["track"]["track_id"]
    this.name = data["track"]["track_name"]
    this.album = data["track"]["album_name"]
    this.artist = data["track"]["artist_name"]
    this.songRating = data["track"]["track_rating"]
  }
}
