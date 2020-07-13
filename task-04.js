'use strict';

let credits = 23500;
const pricePerDroid = 3000;

const numberDroids = prompt('Укажите количество дроидов:', '');

if (numberDroids === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = pricePerDroid * numberDroids;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету.');
  } else {
    console.log(
      `Вы купили ${numberDroids} дроид(ов), на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}
