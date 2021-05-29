let counterValue = 0;
const counterItem = document.querySelector("#value");

const decrement = () => {
  console.log((counterValue += 1));
  counterItem.textContent = counterValue;
};

const increment = () => {
  console.log((counterValue -= 1));
  counterItem.textContent = counterValue;
};

const btnInc = document.querySelector('[data-action="decrement"]');
const btnDec = document.querySelector('[data-action="increment"]');
btnDec.addEventListener("click", decrement);
btnInc.addEventListener("click", increment);

// const counter = {
//   counterValue: 0,

//   decrement() {
//     console.log((this.counterValue += 1));
//     counterItem.textContent = this.counterValue;
//   },

//   increment() {
//     console.log((this.counterValue -= 1));
//     counterItem.textContent = this.counterValue;
//   },
// };

// const counterItem = document.querySelector("#value");

// const btnInc = document.querySelector('[data-action="decrement"]');
// const btnDec = document.querySelector('[data-action="increment"]');
// btnDec.addEventListener("click", counter.decrement.bind(counter));
// btnInc.addEventListener("click", counter.increment.bind(counter));
