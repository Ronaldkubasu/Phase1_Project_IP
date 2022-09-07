
function myFunction() {
    alert("Hello! welcome to our harvad university Site");
}


// shoe purchase starts here
let erroParagraph = document.getElementById("error")
let noteParagraph = document.getElementById("note")
let noticeParagraph = document.getElementById("notice")

console.log(erroParagraph)

function purchase () {
    console.log("button was clicked")
    erroParagraph.textContent  = "Congrats!!! You've successfully puchased your j4 pro nike shoe"
    
}



function buy () {
    noteParagraph.textContent  = "Congrats!!! You've successfully puchased your Dior Air Force 1"
}

function own () {

    noticeParagraph.textContent  = "Congrats!!! You've successfully puchased your sneekers"
}
// shoe purchase ends here


// Calculator starts here
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
// Calculator ends here



// Our casino game starts here
let firstCard = 10
let secondCard = 11
let Cards = [firstCard, secondCard]
let product = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let  messageEl = document.getElementById("message_el")
console.log(message_el)

let productEl = document.getElementById("sum_el")
// let cardsEl = document.getElementById("card-el")

function startGame () {
    //  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    productEl.textContent = "Score: " + product
if (product <= 20) {
    message = "Do you want to draw a new card?" 
}else if (product === 21) {
    message = "Wohoo! You've got Blackjack"
    hasBlackJack = true
}else {
    message = "You are out of the game"
    isAlive = false
}

messageEl.textContent = message

}


function newCard () {
    let card = 6
    product += card
    startGame()
}

// Our casino ends here

fetch(" http://localhost:3000/posts")
    .then(response => console.log(response))
    .then(data => {
        console.log(data.sentence)
        document.querySelector(".calc").innerHTML = data.secondCard
    })

