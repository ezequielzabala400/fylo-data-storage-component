const input = document.querySelector("#input-space");


function setBackgroundSize(input) {
  input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
}

setBackgroundSize(input);

input.addEventListener("input", () => setBackgroundSize(input));

function getBackgroundSize(input) {
  const min = +input.min || 0;
  const max = +input.max || 1000;
  const value = +input.value;

  const size = (value - min) / (max - min) * 100;

  return size;
}

