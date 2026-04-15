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
document.write("Current Date is: ", currentDate)

//Q2
let currentMonth = currentDate.getMonth()
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.write("<br>Current Month: " + monthNames[currentMonth])

//Q3
let currentDay = currentDate.getDay()
let halfDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
document.write("<br>Today is: ", halfDayNames[currentDay])

//Q4
if (currentDay == 0 || currentDay == 6) {
    document.write("<br>Today is Fun Day! because it's weekend")
}

//Q5
let todayDate = currentDate.getDate()
if (todayDate < 16) {
    document.write("<br>First fifteen days of the month")
} else {
    document.write("<br>Last fifteen days of the month")
}

//Q6
let currentTime = currentDate.getTime()
document.write("<br><br>Current Date: ", currentDate)
document.write("<br>Elapsed milliseconds since January 1, 1970: ", currentTime)
document.write("<br>Elapsed minutes since January 1, 1970: ", Math.floor(currentTime / (1000 * 60)))

//Q7
if (currentDate.getHours() < 12) {
    document.write("<br><br>It's AM")
} else {
    document.write("<br><br>It's PM")
}

//Q8
let laterDate = new Date("December 31, 2022")
document.write("<br><br>Later date: ", laterDate)

//Q9
let ramadanDate = new Date("February 19, 2026")
let daysToRamadan = Math.ceil((currentDate.getTime() - ramadanDate.getTime()) / (1000 * 60 * 60 * 24))
document.write("<br><br>" + daysToRamadan + " days have passed since 1st Ramadan, 2026")

//Q10
let referenceDate = new Date("January 1, 2015")
let secondsSinceReference = Math.floor((currentDate.getTime() - referenceDate.getTime()) / 1000)
document.write("<br><br>Seconds that have elapsed since January 1, 2015: " + secondsSinceReference)

//Q11
let currentHour = currentDate.getHours()
let oneHourAgo = new Date(currentDate.getTime() - (1000 * 60 * 60))
document.write("<br><br>Current date: ", currentDate)
document.write("<br>1 hour ago, it was: ", oneHourAgo)

//Q12
let currentYear = currentDate.getFullYear()
let hundredYearsAgo = new Date(currentDate.getTime() - (1000 * 60 * 60 * 24 * 365 * 100))
document.write("<br><br>Current date: ", currentDate)
document.write("<br>100 years back, it was: ", hundredYearsAgo)

//Q13
// let userBirthYear = +prompt("Enter your birth year", "2002")
// let userAge = currentYear - userBirthYear
// document.write("<br><br>Your age is: " + userAge)
// document.write("<br>Your birth year is: " + userBirthYear)

//Q14
let customerName = "Umair Ali"
let currentMonthIndex = currentDate.getMonth()
let currentMonthName = monthNames[currentMonthIndex]
let numberOfUnits = 410.5
let chargesPerUnit = 16.8
let netAmountPayable = numberOfUnits * chargesPerUnit
let latePaymentSurcharge = 350
let grossAmountPayable = netAmountPayable + latePaymentSurcharge
document.write("<br><br>Customer Name: " + customerName)
document.write("<br>Current Month: " + currentMonthName)
document.write("<br>Number of units: " + numberOfUnits)
document.write("<br>Charges per unit: " + chargesPerUnit)
document.write("<br><br>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2))
document.write("<br>Late Payment Surcharge: " + latePaymentSurcharge)
document.write("<br>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2))

document.write("<h2>Chapter 31 ✔</h2>")
document.write("<h2>Chapter 32 ✔</h2>")
document.write("<h2>Chapter 33 ✔</h2>")
document.write("<h2>Chapter 34 ✔</h2>")

// ----------------------------------> Chapter 35-38 <-------------------------------------------
// Q1
function currentDateTime() {
    let now = new Date()
    document.write("Current date and time: " + now)
}
currentDateTime()

// Q2
function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName
    alert("Hello " + fullName + "\nWelcome to our website")
}
// greetUser("Umair", "Ali")

// Q3
function addNumbers(num1, num2) {
    return num1 + num2
}
let sum = addNumbers(5, 7)
document.write("Sum of 5 and 7 is: " + sum)

// Q4
function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    }
}
let calcResult = calculator(10, "*", 5)
document.write("<br><br>Result of 10 * 5 is: " + calcResult)

// Q5
function square(num) {
    return num * num
}
let squaredNum = square(4)
document.write("<br><br>Square of 4 is: " + squaredNum)

// Q6
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
let factResult = factorial(5)
document.write("<br><br>Factorial of 5 is: " + factResult)
document.write("<br><br>")

// Q7
function countBetween(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}
countBetween(1, 10)

// Q8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    let hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular)
    return Math.sqrt(hypotenuseSquare)
}
document.write("<br><br>Length of hypotenuse is: " + calculateHypotenuse(3, 4))

// Q9
function areaOfRectangle(width, height) {
    return width * height
}
document.write("<br><br>Area of rectangle is: " + areaOfRectangle(5, 10))
let width = 7
let height = 3
document.write("<br>Area of rectangle is: " + areaOfRectangle(width, height))

// Q10
function palindromeCheck(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let reversedStr = cleanedStr.split("").reverse().join("")
    return cleanedStr === reversedStr
}
document.write("<br><br>Is 'racecar' a palindrome? " + palindromeCheck("racecar"))
document.write("<br>Is 'hello' a palindrome? " + palindromeCheck("hello"))

// Q11
function titleCase(str) {
    let words = str.toLowerCase().split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}
document.write("<br><br>Title case of 'hello world' is: " + titleCase("hello world"))

// Q12
function longestWord(str) {
    let words = str.split(" ")
    let longest = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest
}
document.write("<br><br>Longest word in 'The quick brown fox jumps over the lazy dog' is: " + longestWord("The quick brown fox jumps over the lazy dog"))

// Q13
function countLetter(str, letter) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++
        }
    }
    return count
}
document.write("<br><br>Number of occurrences of 'o' in 'The quick brown fox jumps over the lazy dog' is: " + countLetter("The quick brown fox jumps over the lazy dog", "o"))

// Q14
function calcCircumference(radius) {
    return 2 * Math.PI * radius
}
function calcArea(radius) {
    return Math.PI * radius * radius
}
document.write("<br><br>Circumference of circle with radius 5 is: " + calcCircumference(5))
document.write("<br>Area of circle with radius 5 is: " + calcArea(5))

document.write("<h2>Chapter 35 ✔</h2>")
document.write("<h2>Chapter 36 ✔</h2>")
document.write("<h2>Chapter 37 ✔</h2>")
document.write("<h2>Chapter 38 ✔</h2>")

// ----------------------------------> Chapter 38-40 <-------------------------------------------
// Q1
function power(a, b) {
    return a ** b
}
console.log(power(4, 2))

//Q2
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}
console.log(isLeapYear(2020))
console.log(isLeapYear(2021))

//Q3
function calcS(a, b, c) {
    return (a + b + c) / 2
}
function calcTriArea(a, b, c) {
    let s = calcS(a, b, c)
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
console.log(calcTriArea(2, 3, 4))

//Q4
function calcAvg(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3
}
function calcPercent(obt, total) {
    return (obt / total) * 100
}
function calcAvg_Percent(marks1, marks2, marks3,total) {
    let avg = calcAvg(marks1, marks2, marks3)
    let obtained = marks1 + marks2 + marks3
    let percent = calcPercent(obtained,total)

    console.log("Average Marks are: ",avg)
    console.log("Total Percentage % is: ",percent)
}
calcAvg_Percent(55,70,80,300)

