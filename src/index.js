
let erroParagraph = document.getElementById("error")
console.log(erroParagraph)

function purchase () {
    console.log("button was clicked")
    erroParagraph.textContent  = "Congrats!!! You've successfully puchased your j4 pro nike shoe"
}

let num1 = 8
let num2 = 4
document.getElementById("num1_el").textContent = num1
document.getElementById("num2_el").textContent = num2


let sumEl = document.getElementById("sum_el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "sum: " + result
}

function substract() {
    let result = num1 - num2
    sumEl.textContent = "sum: " + result
}

function Divide() {
    let result = num1 / num2
    sumEl.textContent = "sum: " + result
}

function Multiply() {
    let result = num1 * num2
    sumEl.textContent = "sum: " + result
}