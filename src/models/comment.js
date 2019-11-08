export default class Comment {
  constructor(model) {
    this.model = model;
  }

  id() {
    return this.model.id;
  }

  name() {
    return this.model.name;
  }

  email() {
    return this.model.email;
  }

  body() {
    return this.model.body;
  }
}
