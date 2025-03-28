const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let numconvertido = [];
let arrUnidades = [];
let arrDecenas = [];
let arrCentenas = [];
let arrMillares = [];

const romanosUnoNueve = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};
const romanosDecenas = {
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
};

const romanosCentenas = {
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
};

const romanosMillares = {
  1000: "M",
  2000: "MM",
  3000: "MMM",
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

const reset = () => {
  arrUnidades = [];
  arrDecenas = [];
  arrCentenas = [];
  arrMillares = [];
  numconvertido = [];
};

convertBtn.addEventListener("click", () => {
  const numLimpio = cleanInput(numberInput.value);
  console.log(numLimpio);

  const numLimToStr = numLimpio.toString(); //convierte numLimpio en cadena para poder manipular

  const arrNumLim = numLimToStr.split(""); //convertimos numLimToStr a un array
  console.log(arrNumLim);

  //si el numero es de dos digitos
  if (arrNumLim.length > 0 && arrNumLim.length <= 2) {
    console.log("numero de dos digitos");
    arrUnidades.push(arrNumLim[1]);
    arrDecenas.push(arrNumLim[0]);
    const arrDecenas2 = arrDecenas.map((numero) => parseInt(numero) * 10);
    console.log(arrDecenas2);
    for (const romano in romanosDecenas) {
      if (romano === arrDecenas2[0].toString()) {
        numconvertido.push(romanosDecenas[romano]);
      }
    }

    for (const romano in romanosUnoNueve) {
      if (romano === arrUnidades[0].toString()) {
        numconvertido.push(romanosUnoNueve[romano]);
      }
    }
  }
  //si el numero es de tres digitos
  if (arrNumLim.length > 0 && arrNumLim.length <= 3) {
    console.log("numero de tres digitos");
    arrUnidades.push(arrNumLim[2]);
    arrDecenas.push(arrNumLim[1]);
    const arrDecenas2 = arrDecenas.map((numero) => parseInt(numero) * 10);
    arrCentenas.push(arrNumLim[0]);
    const arrCentenas2 = arrCentenas.map((numero) => parseInt(numero) * 100);

    for (const romano in romanosCentenas) {
      if (romano === arrCentenas2[0].toString()) {
        numconvertido.push(romanosCentenas[romano]);
      }
    }

    for (const romano in romanosDecenas) {
      if (romano === arrDecenas2[0].toString()) {
        numconvertido.push(romanosDecenas[romano]);
      }
    }

    for (const romano in romanosUnoNueve) {
      if (romano === arrUnidades[0].toString()) {
        numconvertido.push(romanosUnoNueve[romano]);
      }
    }
  }
  //si el numero es de cuatro digitos
  if (arrNumLim.length > 0 && arrNumLim.length <= 4) {
    arrUnidades.push(arrNumLim[3]);
    arrDecenas.push(arrNumLim[2]);
    arrCentenas.push(arrNumLim[1]);
    arrMillares.push(arrNumLim[0]);

    const arrDecenas2 = arrDecenas.map((numero) => parseInt(numero) * 10);
    const arrCentenas2 = arrCentenas.map((numero) => parseInt(numero) * 100);
    const arrMillares2 = arrMillares.map((numero) => parseInt(numero) * 1000);

    for (const romano in romanosMillares) {
      if (romano === arrMillares2[0].toString()) {
        numconvertido.push(romanosMillares[romano]);
      }
    }

    for (const romano in romanosCentenas) {
      if (romano === arrCentenas2[0].toString()) {
        numconvertido.push(romanosCentenas[romano]);
      }
    }

    for (const romano in romanosDecenas) {
      if (romano === arrDecenas2[0].toString()) {
        numconvertido.push(romanosDecenas[romano]);
      }
    }

    for (const romano in romanosUnoNueve) {
      if (romano === arrUnidades[0].toString()) {
        numconvertido.push(romanosUnoNueve[romano]);
      }
    }
  }

  console.log(numconvertido);
  const romanoFinal = numconvertido.join("");
  output.textContent = romanoFinal;
  numberInput.value = "";
  reset();
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const numLimpio = cleanInput(numberInput.value);
    console.log(numLimpio);

    const numLimToStr = numLimpio.toString(); //convierte numLimpio en cadena para poder manipular

    const arrNumLim = numLimToStr.split(""); //convertimos numLimToStr a un array
    console.log(arrNumLim);

    //si el numero es de dos digitos
    if (arrNumLim.length > 0 && arrNumLim.length <= 2) {
      console.log("numero de dos digitos");
      arrUnidades.push(arrNumLim[1]);
      arrDecenas.push(arrNumLim[0]);
      const arrDecenas2 = arrDecenas.map((numero) => parseInt(numero) * 10);
      console.log(arrDecenas2);
      for (const romano in romanosDecenas) {
        if (romano === arrDecenas2[0].toString()) {
          numconvertido.push(romanosDecenas[romano]);
        }
      }

      for (const romano in romanosUnoNueve) {
        if (romano === arrUnidades[0].toString()) {
          numconvertido.push(romanosUnoNueve[romano]);
        }
      }
    }
    //si el numero es de tres digitos
    if (arrNumLim.length > 0 && arrNumLim.length <= 3) {
      console.log("numero de tres digitos");
      arrUnidades.push(arrNumLim[2]);
      arrDecenas.push(arrNumLim[1]);
      const arrDecenas2 = arrDecenas.map((numero) => parseInt(numero) * 10);
      arrCentenas.push(arrNumLim[0]);
      const arrCentenas2 = arrCentenas.map((numero) => parseInt(numero) * 100);

      for (const romano in romanosCentenas) {
        if (romano === arrCentenas2[0].toString()) {
          numconvertido.push(romanosCentenas[romano]);
        }
      }

      for (const romano in romanosDecenas) {
        if (romano === arrDecenas2[0].toString()) {
          numconvertido.push(romanosDecenas[romano]);
        }
      }

      for (const romano in romanosUnoNueve) {
        if (romano === arrUnidades[0].toString()) {
          numconvertido.push(romanosUnoNueve[romano]);
        }
      }
    }
    //si el numero es de cuatro digitos
    if (arrNumLim.length > 0 && arrNumLim.length <= 4) {
      arrUnidades.push(arrNumLim[3]);
      arrDecenas.push(arrNumLim[2]);
      arrCentenas.push(arrNumLim[1]);
      arrMillares.push(arrNumLim[0]);

      const arrDecenas2 = arrDecenas.map((numero) => parseInt(numero) * 10);
      const arrCentenas2 = arrCentenas.map((numero) => parseInt(numero) * 100);
      const arrMillares2 = arrMillares.map((numero) => parseInt(numero) * 1000);

      for (const romano in romanosMillares) {
        if (romano === arrMillares2[0].toString()) {
          numconvertido.push(romanosMillares[romano]);
        }
      }

      for (const romano in romanosCentenas) {
        if (romano === arrCentenas2[0].toString()) {
          numconvertido.push(romanosCentenas[romano]);
        }
      }

      for (const romano in romanosDecenas) {
        if (romano === arrDecenas2[0].toString()) {
          numconvertido.push(romanosDecenas[romano]);
        }
      }

      for (const romano in romanosUnoNueve) {
        if (romano === arrUnidades[0].toString()) {
          numconvertido.push(romanosUnoNueve[romano]);
        }
      }
    }

    console.log(numconvertido);
    const romanoFinal = numconvertido.join("");
    output.textContent = romanoFinal;
    numberInput.value = "";
    reset();
  }
});
