const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let colorFabric = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];

function randonColor() {
  return Math.floor(Math.random() * colorFabric.length);
}
console.log(randonColor());

function generator() {
  let creatColor = "#";
  for (let i = 0; i < 6; i++) {
    creatColor += colorFabric[randonColor()];
  }
  return creatColor;
}

btn.addEventListener("click", () => {
  let finalyColor = generator();
  document.body.style.backgroundColor = finalyColor;
  color.style.color = finalyColor;
  color.textContent = finalyColor;

  localStorage.setItem("finalyColor", JSON.stringify(finalyColor));
  localStorage.setItem("color", JSON.stringify(color.textContent));
});

let store = JSON.parse(localStorage.getItem("finalyColor"));
if (store) {
  document.body.style.backgroundColor = store;
  color.textContent = store;
}

let backColor = JSON.parse(localStorage.getItem("color"));
if (backColor) {
  color.style.color = backColor;
}
