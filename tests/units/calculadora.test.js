const calculadora = require('../models/calculadora.js')

test("somar 2 + 2 deveria ser 4", () => {
  const resultado = calculadora.somar(2, 2)
  console.log(resultado)
  expect(resultado).toBe(4)
})

test("somar 5 + 100 deveria ser 105 ", () => {
  const resultado = calculadora.somar(5, 100)
  console.log(resultado)
  expect(resultado).toBe(105)
})

test("'banana' + 100 deveria ser 'Erro' ", () => {
  const resultado = calculadora.somar('banana', 100)
  console.log(resultado)
  expect(resultado).toBe('Erro')
})