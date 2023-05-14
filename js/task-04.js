let counterValue = 0;

const counterResult = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterResult.textContent = counterValue -= 1;
})

incrementBtn.addEventListener('click', () => {
    counterResult.textContent = counterValue += 1;
})

// ----------------------------------------------------------------------------------------------------------------------

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.