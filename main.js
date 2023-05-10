
let expression = document.getElementById('expression')
let product = document.getElementById('product')

const clear = document.getElementById('clear')
const del = document.getElementById('del')
const percent = document.getElementById('percent')
const division = document.getElementById('division')

const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const multiply = document.getElementById('multiply')

const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const subtract = document.getElementById('subtract')

const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const add = document.getElementById('add')

const all_clear = document.getElementById('all_clear')
const zero = document.getElementById('zero')
const deci = document.getElementById('deci')
const equals = document.getElementById('equals')

clear.addEventListener('click', () => {
  expression.innerText = ``
})

del.addEventListener('click', () => {
  let currentExpression = expression.innerText;
  expression.innerText = currentExpression.slice(0, -1);
});

percent.addEventListener('click', () => {
  expression.innerText += `%`
})

division.addEventListener('click', () => {
  expression.innerText += `/`
})

seven.addEventListener('click', () => {
  expression.innerText += `7`
})

eight.addEventListener('click', () => {
  expression.innerText += `8`
})

nine.addEventListener('click', () => {
  expression.innerText += `9`
})

multiply.addEventListener('click', () => {
  expression.innerText += `*`
})

four.addEventListener('click', () => {
  expression.innerText += `4`
})

five.addEventListener('click', () => {
  expression.innerText += `5`
})

six.addEventListener('click', () => {
  expression.innerText += `6`
})

subtract.addEventListener('click', () => {
  expression.innerText += `-`
})

one.addEventListener('click', () => {
  expression.innerText += `1`
})

two.addEventListener('click', () => {
  expression.innerText += `2`
})

three.addEventListener('click', () => {
  expression.innerText += `3`
})

add.addEventListener('click', () => {
  expression.innerText += `+`
})

all_clear.addEventListener('click', () => {
  expression.innerText = ``
  product.innerText = ``
})

zero.addEventListener('click', () => {
  expression.innerText += `0`
})

deci.addEventListener('click', () => {
  expression.innerText += `.`
})


equals.addEventListener('click', () => {
  try {
    let result = eval(expression.textContent);
    product.textContent = '= ' + result;

    // Update values in localStorage
    localStorage.setItem('expression', expression.textContent);
    localStorage.setItem('product', product.textContent);
  } catch (error) {
    product.textContent = 'Invalid Expression';
  }
})

product.style.fontWeight = 'bold'

setInterval(() => {
  localStorage.setItem('expression', expression.textContent);
  localStorage.setItem('product', product.textContent);
}, 1000);

expression.textContent = localStorage.getItem('expression') || '';
product.textContent = localStorage.getItem('product') || '';


