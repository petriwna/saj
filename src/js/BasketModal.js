import { fromEvent } from 'rxjs';

import { Modal } from './Modal';

export class BasketModal extends Modal {
  constructor(basket) {
    super('#modal-basket', '#close-basket');
    this.basketFab = document.querySelector('#basket');
    this.sumElement = document.querySelectorAll('.sum');
    this.basket = basket;
    fromEvent(this.basketFab, 'click').subscribe(() => this.handleClickFab());

    this.setupEventListeners();
  }

  setupEventListeners() {
    super.setupEventListeners();
  }

  handleClickFab() {
    this.open();
  }

  openWithBasket(img, name, code, price, size, quantity) {
    this.basket.addProductToBasket(img, name, code, price, size, quantity);
    this.renderSum();
    this.open();
  }

  renderSum() {
    this.sumElement.forEach((element) => {
      element.textContent = ` ${this.basket.getSumBasket()} грн`;
    });
  }
}
