'use strict';

let userCountry = prompt(
  'Укажите страну, в которую необходимо оформить доставку:',
  '',
);

if (userCountry == null) {
  console.log('Отменено пользователем!');
} else {
  userCountry = userCountry.toLowerCase();

  let costDelivery;

  switch (userCountry) {
    case 'китай':
      costDelivery = 100;
      console.log(
        `Доставка в ${userCountry} будет стоить ${costDelivery} кредитов.`,
      );
      break;
    case 'чили':
      costDelivery = 250;
      console.log(
        `Доставка в ${userCountry} будет стоить ${costDelivery} кредитов.`,
      );
      break;
    case 'автралия':
      costDelivery = 170;
      console.log(
        `Доставка в ${userCountry} будет стоить ${costDelivery} кредитов.`,
      );
      break;
    case 'индия':
      costDelivery = 80;
      console.log(
        `Доставка в ${userCountry} будет стоить ${costDelivery} кредитов.`,
      );
      break;
    case 'ямайка':
      costDelivery = 120;
      console.log(
        `Доставка в ${userCountry} будет стоить ${costDelivery} кредитов.`,
      );
      break;
    default:
      alert('В вашей стране доставка недоступна');
      break;
  }
}
