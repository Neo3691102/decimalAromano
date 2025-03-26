const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const cleanInput = (input) => {
  if (!input) {
    output.textContent = "Por favor introduce un numero válido.";
    numberInput.value = "";
    return;
  }
  if (input <= 0) {
    output.textContent =
      "Por favor introduce un número positivo mayor o igual a 1";
    numberInput.value = "";
    return;
  }
  if (input >= 4000) {
    output.textContent = "Por favor introduce un numero igual o menor que 3999";
    numberInput.value = "";
    return;
  }

  return Math.floor(parseInt(input));
};

convertBtn.addEventListener("click", () => {
  const numLimpio = cleanInput(numberInput.value);
  console.log(numLimpio);
  
  if (numLimpio > 10 && numLimpio <= 100) {
    console.log("mayor que 10");
  } else if (numLimpio > 100) {
    console.log("mayor que 100");
  } else if (numLimpio > 1000) {
    console.log("mayor que 1000");
  } else {
    console.log("menor o igual a 10");
  }
});
