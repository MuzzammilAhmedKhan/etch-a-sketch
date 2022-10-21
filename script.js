document.querySelector(".btn").addEventListener("click", function () {
  gridSize = getInputValue();
  var container = document.querySelector(".container");

  if (gridSize >= 1 && gridSize <= 100) {
    for (let i = 0; i < gridSize * gridSize; i++) {
      var square = document.createElement("div");
      square.classList.add("class", "square");
      // square.innerText = "-"
      container.appendChild(square);
    }
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridSize = 0;
  } else {
    document.querySelector(".container").textContent =
      "Please enter a number between 1 and 100";
  }

  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
      e.target.style.backgroundColor = randomColor();
    }
  });
});

let randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

function getInputValue() {
  var inputVal = document.getElementById("grid-size").value;
  return inputVal;
}
