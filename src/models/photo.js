export default class Photo {
  constructor(model) {
    this.model = model;
  }

  id() {
    return this.model.id;
  }

  albumId() {
    return this.model.albumId;
  }

  title() {
    return this.model.title;
  }

  url() {
    return this.model.url;
  }

  thumbnailUrl() {
    return this.model.thumbnailUrl;
  }
}
