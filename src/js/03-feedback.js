//HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

//    Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//   Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
//    Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//    Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const refs = { formElem: document.querySelector('.feedback-form') };

refs.formElem.addEventListener(
  'input',
  throttle(function () {
    const email = refs.formElem.elements.email.value;
    const message = refs.formElem.elements.message.value;
    const currentInfo = {
      email,
      message,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentInfo));
  }, 500)
);

refs.formElem.addEventListener('submit', onFormSubmit);

function onLoad() {
  const infoFromLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (infoFromLocalStorage !== null) {
    const { email, message } = infoFromLocalStorage;
    console.log(infoFromLocalStorage);

    refs.formElem.elements.email.value = email;
    refs.formElem.elements.message.value = message;
  }
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

  if (email === '' || message === '') {
    return alert('Field in all fields');
  }
  console.log(object);
  e.target.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}
