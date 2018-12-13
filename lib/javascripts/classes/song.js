export default class Song {
  constructor(data) {
    this.name = data["track"]["track_name"]
    this.album = data["track"]["album_name"]
  }
}
