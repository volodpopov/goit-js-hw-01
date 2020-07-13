'use strict';

let userCountry = prompt(
  'Укажите страну, в которую необходимо оформить доставку:',
  '',
);

if (userCountry === null) {
  console.log('Отменено пользователем!');
} else {
  const costDeliveryChina = 100;
  const costDeliveryChili = 250;
  const costDeliveryAustralia = 170;
  const costDeliveryIndia = 80;
  const costDeliveryJamaica = 120;

  
  switch (userCountry.toLowerCase()) {
    case 'китай':
      console.log(
        `Доставка в Китай будет стоить ${costDeliveryChina} кредитов.`,
      );
      break;
    case 'чили':
      console.log(
        `Доставка в Чили будет стоить ${costDeliveryChili} кредитов.`,
      );
      break;
    case 'автралия':
      console.log(
        `Доставка в Австралию будет стоить ${costDeliveryAustralia} кредитов.`,
      );
      break;
    case 'индия':
      console.log(
        `Доставка в Индию будет стоить ${costDeliveryIndia} кредитов.`,
      );
      break;
    case 'ямайка':
      console.log(
        `Доставка в Ямайку будет стоить ${costDeliveryJamaica} кредитов.`,
      );
      break;
    default:
      alert('В вашу страну доставка недоступна');
      break;
  }
}
