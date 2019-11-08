export default class Post {
  constructor(model) {
    this.model = model;
  }

  id() {
    return this.model.id;
  }

  title() {
    return this.model.title;
  }

  userId() {
    return this.model.userId;
  }

  body() {
    return this.model.body;
  }

  comments() {
    return this.model.comments;
  }
}
