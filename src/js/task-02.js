const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const li1 = document.createElement("li");
li1.textContent = ingredients[0];
const li2 = document.createElement("li");
li2.textContent = ingredients[1];
const li3 = document.createElement("li");
li3.textContent = ingredients[2];
const li4 = document.createElement("li");
li4.textContent = ingredients[3];
const li5 = document.createElement("li");
li5.textContent = ingredients[4];
const li6 = document.createElement("li");
li6.textContent = ingredients[5];
const ul = document.querySelector("#ingredients");
ul.prepend(li1, li2, li3, li4, li5, li6);
// ul.appendChild(li1);
// ul.insertAdjacentHTML(position, string);

// const list = document.querySelector("#ingredients");
// const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, "");

// console.log(markup);

// Вешаем всю разметку за одно обращение к DOM
// list.innerHTML = markup;
