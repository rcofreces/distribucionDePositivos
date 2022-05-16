let cantidadPositivos: number = 0;
let cantidadTotal: number = 0;
let porcentajePositivos: number = 0;
let númeroIngresado: number = Number(prompt("Ingrese un número"));

while (númeroIngresado !== 0) {
  if (númeroIngresado > 0) {
    cantidadPositivos++;
  } 
    cantidadTotal++;
    númeroIngresado = Number(prompt("Ingrese un número"));
  }
}

if (cantidadTotal > 0) {
  porcentajePositivos = (cantidadPositivos * 100) / cantidadTotal;
  console.log("La cantidad de números positivos es: " + cantidadPositivos);
  console.log(
    "El porcentaje de positivos respecto del total es: " +
      porcentajePositivos +
      "%"
  );
}
