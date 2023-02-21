// 2/14/23
// Variables are boxes that hold info
// let myName - would be a declaration
// everything after the = would be the assignment 
console.log("Hello, world!");
let myName = "Dwayne The Rock Johnson";
    myName = "The Rock";
console.log(myName);

//Numbers
    //Integers - whole #s
    //Floats - decimals
let totalCost;
let totalWithTax;

let costPerItem = 2.50
let numberOfItems = 4;
let taxRate = 0.06;

totalCost = costPerItem * numberOfItems;
totalWithTax = totalCost + (taxRate * totalCost);
console.log(totalWithTax);

//Booleans (no quotes!)
let likesDogs = true;
let allergicToDogs = false;

//Strings (always in quotes)
    //Concatenation - String + String
    //interpolation - String + Variable expression
let firstName = "Dwayne";
let lastName = "Johnson";
let fullName = firstName + " " + lastName; //QUESTION - When do spaces matter cuz this ran fine both ways
//Template Literals - things with the money sign
fullName = `${firstName} ${lastName}`;

//All About Me
// don't use let when you reassign a variable
firstName = "Christian";
lastName = "Moore"; 
let age = 27;
let likesToTravel = true;

//Today's Weather Assignment 
let temperature = 48;
let conditions = "cloudy";
let sunriseTime = "7:04pm";
let sunsetTime = "5:47pm";
let currentWeather = `"It is currently ${conditions} and ${temperature}. The sun rose this morning at ${sunriseTime}, and will set at ${sunsetTime}."`;
console.log(currentWeather);
