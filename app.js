// ----------------------------------> Chapter 21-25 <-------------------------------------------

// Q1
// let firstName = prompt("Enter your first name", "Umair")
// let lastName = prompt("Enter your last name", "Ali")
// let fullName = firstName + " " + lastName
// alert("Hello " + fullName + "\nWelcome to our website")

// Q2
// let favPhone = prompt("Enter your favourite phone model", "iPhone 14 Pro Max")
// document.write("My favourite phone is: " + favPhone)
// document.write("<br>Length of string: " + favPhone.length)

// Q3
let word = "Pakistan"
document.write("String: " + word)
document.write("<br>Index of 'n' is: ", word.indexOf("n"))

// Q4
word = "Hello World"
document.write("<br><br>String: " + word)
document.write("<br>Last index of 'l' is: ", word.lastIndexOf("l"))

// Q5
word = "Pakistani"
document.write("<br><br>String: " + word)
document.write("<br>Character at index 3 is: ", word.charAt(3))

// Q6
// let firstName = prompt("Enter your first name", "Umair")
// let lastName = prompt("Enter your last name", "Ali")
// let fullName = firstName.concat(" ", lastName)
// alert("Hello " + fullName + "\nWelcome to our website")

// Q7
word = "Hyderabad"
document.write("<br><br>City: " + word)
word = word.replace("Hyder", "Islam")
document.write("<br>After replacement: " + word)

// Q8
let message = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br><br>Message: " + message)
message = message.replace(/and/g, "&")
document.write("<br>After replacement: " + message)

// Q9
let numString = "472"
document.write("<br><br>Value: " + numString)
document.write("<br>Type: " + typeof (numString))
numString = parseInt(numString)
document.write("<br>Value: " + numString)
document.write("<br>Type: " + typeof (numString))

// Q10
// let userInput = prompt("Enter a string", "umairalimalik")
// document.write("<br><br>User input: " + userInput)
// document.write("<br>Upper case: " + userInput.toUpperCase())

// Q11
// userInput = prompt("Enter a string", "umairalimalik")
// document.write("<br><br>User input: " + userInput)
// userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
// document.write("<br>Title case: " + userInput)

// Q12
let num = 87.36
document.write("<br><br>Number: " + num)
num = num.toString().replace(".", "")
document.write("<br>Result: " + num)

// Q13
// let userName = prompt("Enter username", "umairali78")
// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//     alert("Please enter a valid username without any of these characters: @ . , !")
//     userName = prompt("Enter username", "umairali78")
// }

//Q14
// let myBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// let searchItem = prompt("Welcome to Umair Bakers Bakery. What do you want to order? ", "patties").toLowerCase()
// let found = false
// for (let i = 0; i < myBakery.length; i++) {
//     if (myBakery[i] === searchItem) {
//         alert(searchItem + " is available at index " + i + " in our bakery")
//         found = true
//         break
//     }
// }
// if (!found) {
//     alert("We are sorry! " + searchItem + " is not available in our bakery")
// }

// Q15
// let password = prompt("Enter your password", "abc123")
// if (password.length < 6) {
//     alert("Password must be at least 6 characters long")
// }
// else if(password[0] >= "0" && password[0] <= "9"){
//     alert("Password cannot start with a number")
// }
// else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     alert("Password must contain letters and numbers")
// }
// else {
//     alert("Password is valid")
// }

//Q16
let university = "University of Karachi"
let universityArray = university.split("")
document.write("<br><br>String: " + university)
document.write("<br>Array: <br>" + universityArray.join("<br>"))

// Q17
// let userInput = prompt("Enter a string", "Pakistan")
// document.write("<br><br>User input: " + userInput)
// document.write("<br>Last character of input: " + userInput.charAt(userInput.length - 1))

// Q18
let text = "The quick brown fox jumps over the lazy dog"
document.write("<br><br>Text: " + text)
let count = (text.match(/the/gi) || []).length
document.write("<br>There are " + count + " occurrence(s) of word 'the'")

document.write("<h2>Chapter 21 ✔</h2>")
document.write("<h2>Chapter 22 ✔</h2>")
document.write("<h2>Chapter 23 ✔</h2>")
document.write("<h2>Chapter 24 ✔</h2>")
document.write("<h2>Chapter 25 ✔</h2>")

// ----------------------------------> Chapter 26-30 <-------------------------------------------
// Q1
let positiveInteger = 5.7689698
document.write("Number: " + positiveInteger)
document.write("<br>Round off value: " + Math.round(positiveInteger))
document.write("<br>Floor value: " + Math.floor(positiveInteger))
document.write("<br>Ceil value: " + Math.ceil(positiveInteger))

// Q2
let negativeFloating = 2.46476
document.write("<br><br>Number: " + negativeFloating)
document.write("<br>Round off value: " + Math.round(negativeFloating))
document.write("<br>Floor value: " + Math.floor(negativeFloating))
document.write("<br>Ceil value: " + Math.ceil(negativeFloating))

// Q3
let absoluteValue = -4
document.write("<br><br>Number: " + absoluteValue)
document.write("<br>Absolute value: " + Math.abs(absoluteValue))

// Q4
let randomDice = Math.ceil(Math.random() * 6)
document.write("<br><br>Random dice value: " + randomDice)

// Q5
let randomCoin = Math.ceil(Math.random() * 2)
document.write("<br><br>", randomCoin)
if (randomCoin == 1) {
    document.write("<br>Random coin value: Tails")
} else {
    document.write("<br>Random coin value: Heads")
}

// Q6
let randomNum = Math.ceil(Math.random() * 100)
document.write("<br><br>Random number between 1 and 100: " + randomNum)

// Q7
// let userWeight = prompt("Enter your weight in kilograms", "70kilograms")
// document.write("<br><br>Your weight is: " + parseInt(userWeight) + " kilograms")

// Q8
// let secretNum = Math.ceil(Math.random() * 10)
// let userGuess = +prompt("Guess the secret number between 1 and 10", "2")
// if (userGuess === secretNum) {
//     alert("Congratulations! You guessed the secret number.")
// } else {
//     alert("Try again! The secret number was " + secretNum)
// }

document.write("<h2>Chapter 26 ✔</h2>")
document.write("<h2>Chapter 27 ✔</h2>")
document.write("<h2>Chapter 28 ✔</h2>")
document.write("<h2>Chapter 29 ✔</h2>")
document.write("<h2>Chapter 30 ✔</h2>")


// ----------------------------------> Chapter 31-34 <-------------------------------------------
// Q1
let currentDate = new Date()
document.write("Current Date is: " , currentDate)

//Q2
let currentMonth = currentDate.getMonth()
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.write("<br>Current Month: " + monthNames[currentMonth])

//Q3
let currentDay = currentDate.getDay()
let halfDayNames = ["Sun", "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"]
document.write("<br>Today is: " , halfDayNames[currentDay])

//Q4
if (currentDay == 0 || currentDay == 6) {
    document.write("<br>Today is Fun Day! because it's weekend")
}

//Q5
let todayDate = currentDate.getDate()
if (todayDate < 16) {
    document.write("<br>First fifteen days of the month")
}else{
    document.write("<br>Last fifteen days of the month")
}

