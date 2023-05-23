const container = document.querySelector(".container");
const h2 = document.querySelector("h2");
const fruitList = document.createElement("ul");
fruitList.className = "fruit-list";
const basket = document.createElement("ul");
basket.className = "basket";

// Define the fruits array
const fruits = ["🍎", "🍌", "🍊", "🍍", "🍇", "🍐", "🍅", "🥭", "🥇"];

// Define the gFruits object to track fruit counts
const gFruits = {};

// FRUIT LIST
const fruitItems = fruits.map((fruit) => {
  const li = document.createElement("li");
  li.className = "fruit";
  li.innerHTML = `<span>${fruit}</span><button class="btn">add</button>`;
  return li;
});

fruitList.append(...fruitItems);
container.insertBefore(fruitList, h2);
container.appendChild(basket);

// FRUIT IN THE BASKET LIST
container.addEventListener("click", (event) => {
  const btn = event.target.closest(".btn");
  if (btn) {
    const fruit = btn.previousElementSibling.textContent;
    const fruitId = fruits.indexOf(fruit);

    if (!gFruits.hasOwnProperty(fruit)) {
      const li = document.createElement("li");
      li.className = "basket-fruit";
      gFruits[fruit] = { count: 1, fruitId };

      li.innerHTML = `<span>${fruit}</span><h3 class="fruit-count-${fruitId}">X${gFruits[fruit].count}</h3>`;
      basket.appendChild(li);
    } else {
      gFruits[fruit].count++;
      document.querySelector(`.fruit-count-${fruitId}`).innerText = `X${gFruits[fruit].count}`;
    }
  }
});
