//HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

//    Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//   Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
//    Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//    Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import { saveToLS, loadFromLS } from './helpers';

const refs = { formElem: document.querySelector('.feedback-form') };

refs.formElem.addEventListener('input', onFormInput);
refs.formElem.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const key = e.target.email;
  const value = e.target.message;
  saveToLS(key, value);
}

function onLoad() {
  const email = loadFromLS('email');
  const message = loadFromLS('message');

  refs.formElem.elements.email.value = email;
  refs.formElem.elements.message = message;
}
onLoad();

function onFormSubmit(e) {
  e.preventDefault();
  const email = refs.formElem.elements.email.value;
  const message = refs.formElem.elements.message.value;
  const object = {
    email,
    message,
  };
  console.log(object);
  e.Target.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}
