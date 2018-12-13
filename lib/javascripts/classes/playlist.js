export default class Playlist {
  constructor(data) {
    this.name = data['name']
    this.favorites = data['favorites']
  }
}
