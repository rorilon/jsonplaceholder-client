export default class User {
  constructor(model) {
    this.model = model;
  }

  id() {
    return this.model.id;
  }

  name() {
    return this.model.name;
  }

  username() {
    return this.model.username;
  }

  email() {
    return this.model.email;
  }

  address() {
    const address = this.model.address;
    return `${address.zipcode} ${address.city} ${address.street} ${address.suite}`;
  }

  phone() {
    return this.model.phone;
  }

  website() {
    return this.model.website;
  }

  company() {
    return this.model.company;
  }

  companyName() {
    return this.model.company.name;
  }
}
