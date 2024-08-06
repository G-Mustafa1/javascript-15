//1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write(`<h1> Q1: Task 1  </h1>`);
let randomNumber = Math.random()*9
document.write(`<h2> Number: ${randomNumber.toFixed(5)}</h2>`);
let roundNumber = Math.round(randomNumber)
document.write(`<h2>Round off value: ${roundNumber}</h2>`);
let floorNumber = Math.floor(randomNumber)
document.write(`<h2>floor off value: ${floorNumber}</h2>`);
let ceilNumber = Math.ceil(randomNumber)
document.write(`<h2>ceil off value: ${ceilNumber}</h2> <br> <hr>`);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

document.write(`<h1> Q2: Task 2  </h1>`);
let random_Number = Math.random()*9-9
document.write(`<h2> Number: ${random_Number.toFixed(3)}</h2>`);
let round_Number = Math.round(random_Number)
document.write(`<h2>Round off value: ${round_Number}</h2>`);
let floor_Number = Math.floor(random_Number)
document.write(`<h2>floor off value: ${floor_Number}</h2>`);
let ceil_Number = Math.ceil(random_Number)
document.write(`<h2>ceil off value: ${ceil_Number}</h2> <br> <hr>`);

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write(`<h1>Task 3</h1>`);
let number = prompt("Ente a number")
let absoluteValue = Math.abs(number)
document.write(`<h2>Absolute value of ${number} is ${absoluteValue}</h2> <br> <hr>`);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

document.write(`<h1>Task 4</h1>`);
let diceValue = Math.floor(Math.random()*6);
document.write(`<h2>Random dice value: ${diceValue}</h2> <br> <hr>`);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

document.write(`<h1>Task 5</h1>`);
let game = Math.ceil(Math.random()*2)
if(game == 2){
   document.write(`<h2>${game} Random coin value: Heads</h2>`);
}
else{
   document.write(`<h2>${game} Random coin value: Tails</h2> <br> <hr>`);
}

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

document.write(`<h1>Task 6</h1>`);
let betweenRandomnum = Math.floor(Math.random()*100);
document.write(`<h2>Random number between 1 to 100: ${betweenRandomnum}</h2> <br> <hr>`);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

document.write(`<h1>Task 7</h1>`);
let weightInput = prompt('Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilogram): ')
let weight = weightInput.replace(/[^\d.]/g,"");
console.log(weight)
if(weight==""){
   document.write(`<h2>Invalid input. Please enter a number.</h2> <br> <hr>`);
}
else{
   document.write(`<h2>Your weight is: ${weight} kgs</h2> <br> <hr>`);  
}

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

document.write(`<h1>Task 8</h1>`);
let userInput = prompt("Enter a number between 1 to 10");
let random_num = Math.floor(Math.random()*10)+1
if(userInput == random_num){
   document.write(`<h2>Congratulations! You guessed the correct number.</h2></center><br><hr>`);
}
else if(userInput > 10 || userInput == ""){
   document.write(`<h2>Invalid input. Please enter a number between 1 to 10.</h2></center><br><hr>`);
   
}
else{
   document.write(`<h2>Try again!</h2> <br> <hr>`);
   
}