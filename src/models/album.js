export default class Album {
  constructor(model) {
    this.model = model;
  }

  id() {
    return this.model.id;
  }

  userId() {
    return this.model.userId;
  }

  title() {
    return this.model.title;
  }
}
