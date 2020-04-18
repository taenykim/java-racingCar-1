const { body } = document

const makeDescription = (string, parrentElem) => {
  const description = document.createElement('div')
  description.innerHTML = `${string}`
  parrentElem.append(description)
}

const form = document.createElement('form')
body.append(form)

makeDescription('입력', form)

const input = document.createElement('input')
input.type = 'text'
input.style.width = '500px'
form.append(input)

const button = document.createElement('button')
button.textContent = '입력!'
form.append(button)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let result = input.value
  result = result.replace(/\s/gi, '')
  console.log(result)
  let answer = Number(result[0])
  let calculator = new Calculator()
  for (let i = 1; i < result.length; i++) {
    if (result[i] === '+') {
      answer = calculator.add(answer, Number(result[i + 1]))
    } else if (result[i] === '-') {
      answer = calculator.subtract(answer, Number(result[i + 1]))
    } else if (result[i] === '*') {
      answer = calculator.multiple(answer, Number(result[i + 1]))
    } else if (result[i] === '/') {
      answer = calculator.divide(answer, Number(result[i + 1]))
    }
  }
  console.log(answer)
})
