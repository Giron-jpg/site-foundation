const calculadora = require("../models/calculadora.js");
test("somar 2 + 2 deveria ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
  expect(resultado).toBe(4);
});
test("somar 2 + 0 deveria ser 2", () => {
  const resultado = calculadora.somar(2);
  console.log(resultado);
  expect(resultado).toBe(2);
});
test("somar 2 + banana deveria ser 'erro'", () => {
  const resultado = calculadora.somar(2, "banana");
  console.log(resultado);
  expect(resultado).toBe("Erro");
});
test("somar banana + 3 deveria ser 3", () => {
  const resultado = calculadora.somar("Erro");
  console.log(resultado);
  expect(resultado).toBe("Erro");
});
