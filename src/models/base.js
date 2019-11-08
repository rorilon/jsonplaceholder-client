export default class Base {
  constructor(model) {
    this.model = model;
  }

  id() {
    return this.model.id;
  }
}
