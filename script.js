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
  // console.log(e.target);
  e.target.style.backgroundColor = randomColor();
});

let randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color
}

// console.log(randomColor());




