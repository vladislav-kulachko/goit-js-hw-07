const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listIngredients = document.querySelector("#ingredients");

const listCreater = (ingredients) => {
  return ingredients.map((ingredient) => {
    const newItem = document.createElement("li");
    newItem.textContent = ingredient;
    return newItem;
  });
};
listIngredients.append(...listCreater(ingredients));

// const markup = ingredients.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   ""
// );
// listIngredients.innerHTML = markup;
