const nameInputFieldEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputFieldEl.addEventListener('input', () => {
  if (nameInputFieldEl.value !== '') {
    nameOutputEl.textContent = nameInputFieldEl.value;
  } else {
    nameOutputEl.textContent = 'Anonymous';
  }
});

// ----------------------------------------------------------------------------------------------------------------------

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
