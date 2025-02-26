const pantalla = document.getElementById('pantalla');

function agregarAPantalla(valor) {
  if (pantalla.innerText === "Error") {
    limpiarPantalla();
  }
  pantalla.innerText += valor;
}

function limpiarPantalla() {
  pantalla.innerText = "";
}

function retroceso() {
  if (pantalla.innerText !== "" && pantalla.innerText !== "Error") {
    pantalla.innerText = pantalla.innerText.slice(0, -1);
  }
}

function calcular() {
  try {
    let expresion = pantalla.innerText;
    if (expresion === "" || /[+\-*/.]$/.test(expresion)) {
      throw "Error!";
    }
    let resultado = eval(expresion);
    if (resultado === undefined || isNaN(resultado)) {
      throw "Error!";
    }
    // Si el resultado es infinito (por division por cero u otro motivo)
    if (!isFinite(resultado)) {
      pantalla.innerText = "Indefinido papu";
      return;
    }
    pantalla.innerText = resultado;
  } catch (error) {
    pantalla.innerText = "Error!";
    console.error("Error:", error);
  }
}
