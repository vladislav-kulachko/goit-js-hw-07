const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
gallery.classList.add("gal");

const createrGalary = (images) => {
  images.forEach((image) => {
    gallery.insertAdjacentHTML(
      "beforeend",
      `<li><img src = "${image.url}" alt = "${image.alt}"></li>`
    );
  });
};
createrGalary(images);

const galeryElem = document.querySelectorAll("li");
const add = galeryElem.forEach((elem) => elem.classList.add("gal__elem"));

// const createrGalary = (images) => {
//   return images.map((image) => {
//     const newItem = document.createElement("li");
//     const newImage = document.createElement("img");
//     newImage.alt = image.alt;
//     newImage.src = image.url;
//     newItem.style.margin = "10px";
//     newImage.style.maxHeight = "360px";
//     newItem.appendChild(newImage);
//     return newItem;
//   });
// };
// const gallery = document.querySelector("#gallery");
// gallery.style.display = "flex";
// gallery.style.justifyContent = "center";
// gallery.style.alignItems = "center";
// gallery.append(...createrGalary(images));
