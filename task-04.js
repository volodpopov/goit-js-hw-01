'use strict';

let credits = 23500;
const pricePerDroid = 3000;

let numberDroids = prompt('Укажите количество дроидов:', '');

let totalPrice;

if (numberDroids == null) {
  console.log('Отменено пользователем!');
} else if (
  numberDroids == '' ||
  Number.isNaN(Number(numberDroids)) ||
  numberDroids <= 0
) {
  console.log('Вы не верно указали количество.');
} else {
  totalPrice = pricePerDroid * numberDroids;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету.');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${numberDroids} дроид(ов), на счету осталось ${credits} кредитов.`,
    );
  }
}
