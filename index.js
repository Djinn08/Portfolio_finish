console.log("this is replacement of print")
/* this will be notes to study for javascript test
Theres 
NUMBER - numbers duh
string - you know what this is
boolean - ^
NULL - INTENTIONAL absence of value. 
Undefined - denoted by said keyword it represent the same thing but having a different use than null. THIS MEANS THE VALUE DOES NOT EXIST
Symbol - a unique ID used for more complex coding
Object - Collections of related data
These are considerd primitive data types
*/

//Arithmetic Operators 
console.log(3+4); //PRINTS 7
console.log(5  - 1); // prints 4
console.log(4 * 2); // prints 8
console.log(9 / 3); // prints 3

//Variables
const joke = 'funny' // This is a 'constant' variable. This WILL NOT CHANGE
var haha = 'imdying' // This is just a simple variable
let yeeyee = 'afljaf' // This is the LET variable. This lets us reassign it later if needed such as for arithmetic

// Typeof - operator
const kelvin = 0
// This is the constant variable named kelvin, made to represent its value. //
let celsius = kelvin - 273
// celsius is is simply kelvin - 273  using arithmetic in our javascript code. We can create a variable that makes it calculate  Celsius automagically //
let fahrenheit = celsius *(9/5) + 32
// Fahrenheit is made by converting celsius into  another decimel number with this conversion above. That allows us to make another jump. //
fahrenheit = Math.floor(fahrenheit);
// Generally - when converting fahrenheit from celsius- it gives a decimal number. So we use math.floor to get a nice whole number. //
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//if , if else, else if statements
let sale = true;
sale = false;

if(sale){
    console.log('time to buy')
}

a = 0;
for(a;a<5;a++)
console.log(a)

//  OBJECTS AND FUNCTIONS - USING THEM IN REACT MAKE SURE TO REVIEW THEM HEAVILY


