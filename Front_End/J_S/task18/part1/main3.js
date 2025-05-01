// Edit The Class
class User {
  #card;

  constructor(username, card) {
    this.u = username;
    this.#card = this.formatCard(card);
  }
  // card privat not access in code

  formatCard(card) {
    return card
      .toString()
      .replace(/\D/g, "")
      .match(/.{1,4}/g)
      .join("-");
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#card}`;
  }
}
