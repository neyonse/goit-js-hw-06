function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('[type="number"]');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    boxSize += 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '4px';
    box.style.borderRadius = '4px';

    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

createBoxesBtn.addEventListener('click', () => {
  const boxesNumber = inputEl.value;
  if (boxesNumber !== '') {
    createBoxes(boxesNumber);
  } else {
    alert('Enter elements number');
    inputEl.focus();
  }
});

destroyBoxesBtn.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});

// ----------------------------------------------------------------------------------------------------------------------

// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
