//Завдання 2 - відеоплеєр
//HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.
//    Ознайомся з документацією бібліотеки Vimeo плеєра.
//   Додай бібліотеку як залежність проекту через npm.
//   Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
//   Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//   Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//  Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//  Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.


//   Додаємо бібліотеку Vimeo плеєра як залежність проекту через npm.
import Player from '@vimeo/player';
//   Додаємо бібліотеку lodash як залежність проекту через npm.
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
//Ініціалізуємо плеєр
const player = new Player(iframe);
//Функція зберігання часу відтворення у локальне сховище. яке оновлювався не частіше, ніж раз на секунду.
const callback = throttle(function savedCurrentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', callback);

//Під час перезавантаження сторінки за допомогою методу setCurrentTime()  відновлення відтворення зі збереженої позиції, тобто від збереженого часу відтворення в savedTime .
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(parseFloat(savedTime)).then(function (seconds) {});



//Код методу setCurrentTime() з бібліотеки:
//player
//  .setCurrentTime(30.456)
//  .then(function (seconds) {
// seconds = the actual time that the player seeked to
//  })
//  .catch(function (error) {
//    switch (error.name) {
//      case 'RangeError':
// the time was less than 0 or greater than the video’s duration
//        break;

//      default:
// some other error occurred
//        break;
//    }
//  });
