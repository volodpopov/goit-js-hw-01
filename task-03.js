'use strict';

const ADMIN_PASSWORD = 'qwerty';
let message;
let userInput = prompt('Введите пароль администратора:', '');

if (userInput == null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
