class Calculator {
  add(i, j) {
    return i + j
  }
  subtract(i, j) {
    return i - j
  }
  multiple(i, j) {
    return i * j
  }
  divide(i, j) {
    return i / j
  }
}

test('덧셈', () => {
  let calculator = new Calculator()
  expect(calculator.add(1, 2)).toBe(3)
})

test('뺄셈', () => {
  let calculator = new Calculator()
  expect(calculator.subtract(1, 2)).toBe(-1)
})

test('곱셈', () => {
  let calculator = new Calculator()
  expect(calculator.multiple(1, 2)).toBe(2)
})

test('나눗셈', () => {
  let calculator = new Calculator()
  expect(calculator.divide(2, 1)).toBe(2)
})
