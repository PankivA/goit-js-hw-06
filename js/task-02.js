const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.body.querySelector('#ingredients');



const items = ingredients.map(ingridient => {
  const li = document.createElement('li');
  li.textContent = ingridient;
  li.classList.add('item');
  return li;
});

list.append(...items);




