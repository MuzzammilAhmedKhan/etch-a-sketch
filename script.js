const container = document.createElement("div");
container.setAttribute("class", "container");

var square;

for (let i = 1; i <= 256; i++) {
  square = document.createElement("div");
  square.setAttribute("class", "square");
  square.setAttribute("id", `square-${i}`);
  square.innerText = `${i}`;
  container.appendChild(square);
}
document.body.appendChild(container);

// console.log(square);

container.addEventListener("mouseover", function (e) {
  console.log(e.target);
});

