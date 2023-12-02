let screen = document.querySelector(".screen");
let keys = [...document.querySelectorAll(".button")];
let listKeycode = keys.map((allKeys) => allKeys.dataset.key);

document.addEventListener("keydown", (e) => {
  let value = e.keyCode.toString();
  calculate(value);
});

document.addEventListener("click", (e) => {
  let value = e.target.dataset.key;
  calculate(value);
});

const calculate = (value) => {
  if (listKeycode.includes(value)) {
    switch (value) {
      case "8":
        screen.textContent = "";
        break;
      case "13":
        const calculateValue = eval(screen.textContent);
        screen.textContent = calculateValue;
        break;
      default:
        const indexKeycode = listKeycode.indexOf(value);
        const key = keys[indexKeycode];
        screen.textContent += key.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  screen.textContent = "";
  screen.textContent += "Error";
});
