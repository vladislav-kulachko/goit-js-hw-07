const categories = document.querySelector("#categories");
console.log(`В списке ${categories.childElementCount} категории`);

const allCategories = document.querySelectorAll(".item");
// console.log(`В списке ${allCategories.length} категории`);

function calculationCategories(allCategories) {
  return allCategories.forEach((elem) => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${elem.lastElementChild.childElementCount}`
    );
  });
}
calculationCategories(allCategories);

// function calculationCategories(allCategories) {
//   return allCategories.forEach((elem) => {
//     console.log(`Категория: ${elem.querySelector("h2").textContent}`);
//     console.log(`Количество элементов: ${elem.querySelectorAll("li").length}`);
//   });
// }
