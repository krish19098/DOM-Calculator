document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        display.value += button.value;
      } else if (button.classList.contains("operator")) {
        display.value += " " + button.value + " ";
      } else if (button.classList.contains("clear")) {
        clearLastCharacter();
      } else if (button.classList.contains("calculate")) {
        try {
          display.value = eval(display.value);
        } catch (error) {
          alert("Invalid expression");
          clearDisplay();
        }
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (
      !isNaN(key) ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "Enter"
    ) {
      if (!isNaN(key)) {
        display.value += key;
      } else if (key === "Enter") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          alert("Invalid expression");
          clearDisplay();
        }
      } else {
        display.value += " " + key + " ";
      }
    } else if (key === "Backspace") {
      clearLastCharacter();
    } else {
      alert("Only numbers and operators (+, -, *, /) are allowed");
    }
  });

  function clearDisplay() {
    display.value = "";
  }

  function clearLastCharacter() {
    display.value = display.value.slice(0, -1);
  }
});
