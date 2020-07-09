'use strict';

const total = 100;
const ordered = 30;

const result =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(result);
