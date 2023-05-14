const inputFieldEl = document.querySelector('#validation-input');
console.log(inputFieldEl);

inputFieldEl.addEventListener('blur', event => {
  const inputFieldValueLength = event.currentTarget.value.trim().length;
  const inputFieldValueToPass = Number(inputFieldEl.dataset.length);

  if (inputFieldValueLength == inputFieldValueToPass) {
    inputFieldEl.classList.remove('invalid');
    inputFieldEl.classList.add('valid');
  } else {
    inputFieldEl.classList.remove('valid');
    inputFieldEl.classList.add('invalid');
  }
});

// ----------------------------------------------------------------------------------------------------------------------

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
