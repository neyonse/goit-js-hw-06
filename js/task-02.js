const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsMarkup = list => list.map(el => {
  const listItem = document.createElement('li');
  listItem.textContent = el;
  listItem.classList.add('item');

  return listItem;
});

const ingredientsMarkup = makeIngredientsMarkup(ingredients);

document.querySelector('#ingredients').append(...ingredientsMarkup);

console.log(document.querySelector('#ingredients'));

// ----------------------------------------------------------------------------------------------------------------------

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
