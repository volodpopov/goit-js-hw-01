'use strict';

let input;
let total = 0;
do {
  input = prompt('Введите число для сложения:', '');
  if (Number.isNaN(Number(input))) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else {
    total += Number(input);
  }
} while (input !== null);
{
  alert(`Общая сумма чисел равна ${total}`);
}
