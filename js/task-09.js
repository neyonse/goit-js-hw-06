function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBodyBgColorBtn = document.querySelector('.change-color');
const bodyBgColorValue = document.querySelector('.color');

const setBgColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  bodyBgColorValue.textContent = newColor;
};

changeBodyBgColorBtn.addEventListener('click', setBgColor);

// ----------------------------------------------------------------------------------------------------------------------

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.
