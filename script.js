const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numconvertido = [];

const romanos = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

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

  const numLimToStr = numLimpio.toString();
  console.log(numLimToStr);
});

numberInput.addEventListener("keydown", (e) => {
  // console.log(romanos[1]);
  if (e.key === "Enter") {
    const numLimpio = cleanInput(numberInput.value);
    console.log(numLimpio);

    const numLimToStr = numLimpio.toString(); //convierte numLimpio en cadena para poder manipular
    console.log(numLimToStr);
    const arrNumLim = numLimToStr.split(""); //convertimos numLimToStr a un array

    if (arrNumLim.length > 1) {
      //si el numero es de dos digitos

      console.log("numero de dos digitos");

      for (const romano in romanos) {
        if (romano === arrNumLim[1]) {
          console.log(romanos[romano]); //vemos cual romano coincidio
          numconvertido.push(romanos[romano]);
          console.log(numconvertido); //numero convertido
        }
      }
    }
    console.log(arrNumLim);

    numberInput.value = "";
  }
});
