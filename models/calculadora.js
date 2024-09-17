function somar(valor1 = 0, valor2 = 0) {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    return "Erro";
  }
  return valor1 + valor2;
}

exports.somar = somar;
