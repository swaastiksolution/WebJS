{/* LESSON - 1 */}

// How to write basic JS on Console. On enter the output will be shown as 'Hello World!'
console.log("Hello World!");
var a = "B"
console.log(a);

//Logging Objects
console.log({
    'Email': '',
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2'
});

// Using DOM API - DOM Stands for DOcument Object Modal. It is object oriented representation of structured documents like XML and HTML.
//Example :  
<p id="paragraph"></p>
//IN script we  will call it as : 
document.getElementById("paragraph").textContent = "Hello There";
// http://jsbin.com/fuzijox/edit?html,js,console,output



//We can use javascript to create new Html programmatically
//For Example - 
<body>
    <h1>Adding an element</h1>
</body>

//In js we create a new <p> tag with a textContent property of and add it at the end of the html body
var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element); 




//ALert
Window.alert() || alert() - // Use to give the alert box.



//Prompt
window.prompt()  //Syntax - prompt(text, [deafult]);
//Example - 
var age = prompt("How old are you?");
console.log(age); 



//Confirm
//The window.confirm() method displays a modal dialog with an optional message and two buttons, OK and Cancel
//Example 1:
if(window.confirm("Are you sure you want to delete this?")) {
 deleteItem(itemId);
}
//Example 2:
var deleteConfirm = window.confirm("Are you sure you want to delete this?");



//Using the DOM Api (with graphical text: Canvas, SVG, and Image File)
// 1. Canvas - Html provides canvas element to build raster-based images.
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
// To select a context for the canvas 
var ctx = canvas.getContext('2d');
//To set properties related to text
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
//Now insert the canvas element into page to take effect:
document.body.appendChild(canvas);


//2. Using SVG - SVG is for building scalable vector-based graphics and can be used within HTML
//Creating the SVG element conatiner
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;
//For desired positioning and font characteristics
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
//Then add actual text to display
text.textContent = 'Hello world!';
//Finally add text element to out SVG container and add SVG conatiner element to Html document
svg.appendChild(text);
document.body.appendChild(svg);

//3. Image File - If you already have an image file containing the desired text and have it placed on a server, 
// you can add the URL of the image and then add the image to the document 
var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);


{/* LESSON - 2 */}
// DOM - Dosument Object Modal defines standard for accessing documents
// DOM Methods - are action you perform  and DOM properties are values that can be setted or changed
// Example - (getElementById) is a method, while (innerHTML) is a property.

//Types of Methods:
// 1. docuemnt.getElementById(id)
// 2. document.getElementsByTagName(name)
// 3. document.getElementsByClassName(name)

//Changing HTML elements
//Properties: 
// 1. element.innerHTML =  new html content	  -  Change the inner HTML of an element
// 2. element.attribute = new value	  -  Change the attribute value of an HTML element
// 3. element.style.property = new style  -  Change the style of an HTML element

//Method:
// 1. element.setAttribute(attribute, value)	Change the attribute value of an HTML element

//Adding and Deleting Elements:
// 1. document.createElement(element)	Create an HTML element
// 2. document.removeChild(element)	Remove an HTML element
// 3. document.appendChild(element)	Add an HTML element
// 4. document.replaceChild(new, old)	Replace an HTML element
// 5. document.write(text)	Write into the HTML output stream

//To change Style of Html: document.getElementById(id).style.property = new style

//DOM Events:  When we react to element the DOM event occurs. Example: onClick()
<script>
    document.getElementById("myBtn").onclick = displayDate;
</script>

//DOM Event Listener: addEventListener()
//Syntax - element.addEventListener(event, function, useCapture);
//Example: 
document.getElementById("myBtn").addEventListener("click", displayDate);

element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
element.removeEventListener("mousemove", myFunction); //....and more


{/* EXERCISE 1*/}
// User opens page 
// Prompt asks name + age 
// Alert: Welcome 
// Greeting shown 
// User adds 3 tasks 
// Marks 2 as complete 
// Canvas updates to 66% 
// User deletes 1 task with confirmation 
// SVG remains at top with animation 
// Image shown at bottom 
// All actions logged in console


{/* Lesson -3 */}
// Example of a string variable
var a = "This is a variable";

// Types of Variables

var myInteger = 12;              // Integer (number)
var myLong = 9310141419482;      // Large number (still a 'number' in JavaScript)
var myFloat = 5.5;               // Floating-point number (decimal)
var myDouble = 9310141419482.22; // JavaScript doesn't distinguish float/double — all are Number type
var myBoolean = true;           // Boolean: true
var myBoolean2 = false;         // Boolean: false

var myNotANumber = NaN;         // "Not-a-Number"
var NaN_Example = 0 / 0;        // This also results in NaN

var notDefined;                 // undefined (no value assigned yet)
console.log(notDefined);        // undefined

// Accessing a variable that hasn't been declared will throw an error:
try {
  console.log(aRandomVariable);  // ReferenceError
} catch (error) {
  console.warn("aRandomVariable is not defined");
}

var myNull = null;              // Intentionally assigned "no value"

// -------------------------------

// Arrays - A collection of values

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3

// Objects - A collection of key-value pairs

let person = {
  name: "Muskan",
  age: 25,
  isDeveloper: true
};

console.log(person.name); // Muskan
console.log(person["age"]); // 25

// | Feature                 | `var`                              | `let`                  | `const`                    |
// | ----------------------- | -----------------------------------| -----------------------| ---------------------------|
// | **Scope**               | Function-scoped                    | Block-scoped (`{}`)    | Block-scoped (`{}`)        |
// | **Can re-declare?**     | Yes                                | No (in the same scope) | No                         |
// | **Can update value?**   | Yes                                | Yes                    | No (but object values can) |
// | **Hoisting?**           | Yes (initial value is `undefined`) | Yes (but in **TDZ**)   | Yes (but in **TDZ**)       |
// | **Use before declare?** | No error (value is `undefined`)    | Error                  | Error                      |


{/* Exercise 2 : No Map, Filter, Find, Reduce */}
//Find the greates age from the arry of objects



{/* Lessson 4 */}
// Strings
// Strings in JavaScript can be enclosed in Single quotes 'hello', Double quotes "Hello" and (from ES2015, ES6) in
// Template Literals (backticks) `hello`.
let hello = "Hello";
let world = 'world';
let helloW = `Hello World`; // ES2015 / ES6
// Strings can be created from other types using the String() function.
let intString = String(32); // "32"
let booleanString = String(true); // "true"
let nullString = String(null); // "null"
// Or, toString() can be used to convert Numbers, Booleans or Objects to Strings.
let intStrings = (5232).toString(); // "5232"
let booleanStrings = (false).toString(); // "false"
let objString = ({}).toString(); // "[object Object]"
// Strings also can be created by using String.fromCharCode method.
String.fromCharCode(104,101,108,108,111) //"hello"

//String Concatenation
let foo = "Foo";
let bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d"


//Reverse String - reverse the string 
function reverseString(str) {
 return str.split('').reverse().join('');
}
reverseString('string'); // "gnirts"

//Split  and Join
//split() - Splits the string into single characters.
//Join() - joins the single characters into a string.

//Using Spreading Operator
function reverseString(str) {
 return [...String(str)].reverse().join('');
}
console.log(reverseString('stackoverflow')); // "wolfrevokcats"
console.log(reverseString(1337)); // "7331"
console.log(reverseString([1, 2, 3])); // "3,2,1"

//Custom reverse function
function reverse(string) {
 var strRev = "";
 for (var i = string.length - 1; i >= 0; i--) {
 strRev += string[i];
 }
 return strRev;
}
reverse("zebra"); // "arbez"


{/* Exercise 3 */}
//1. Write a function that checks if a given string is a palindrome, ignoring cases, spaces, and punctuation.
//2. Write a function that returns the count of vowels and consonants in a given string.
//3. Write a function that takes a sentence (a string of words separated by spaces) and returns a new string where each word is reversed, but the word order remains unchanged.
// Requirements for question 3 - 1. The input will be a non-empty string. 2. The function should preserve the original word order. 3. Words may contain punctuation or digits.
//  4. Extra spaces at the beginning or end should be trimmed(No need to use Trim now). 5. Multiple spaces between words should be reduced to a single space.
// Example for question 3 - 
// Input: "  Hello    World  "
// Output: "olleH dlroW"

// Input: "JavaScript is awesome!"
// Output: "tpircSavaJ si !emosewa"

//Access character at index in string - charAt()
//Use charAt() to get a character at the specified index in the string.
var string = "Hello, World!";
console.log( string.charAt(4) ); // "o"
//Alternatively, because strings can be treated like arrays, use the index via bracket notation.
var string = "Hello, World!";
console.log( string[4] ); // "o"
//To get the character code of the character at a specified index, use charCodeAt().
var string = "Hello, World!";
console.log( string.charCodeAt(4) ); // 111


//Trim WhiteSpace
//To trim whitespace from the edges of a string, use String.prototype.trim:
" some whitespaced string ".trim(); // "some whitespaced string"

//Example
// Stage 1 proposal
" this is me ".trimStart(); // "this is me "
" this is me ".trimEnd(); // " this is me"
// Non-standard methods, but currently implemented by most engines
" this is me ".trimLeft(); // "this is me "
" this is me ".trimRight(); // " this is me"


//Splitting String into an Array
//Use .split to go from strings to an array of the split substrings:
var s = "one, two, three, four, five"
s.split(", "); // ["one", "two", "three", "four", "five"]
//Use the array method .join to go back to a string:
s.split(", ").join("--"); // "one--two--three--four--five"

//Slice - use to extract substring by giving two indices
//Example - 
var s = "0123456789abcdefg";
s.slice(0, 5); // "01234"
s.slice(5, 6); // "5"


//String Find and Replace Funtions - To search string inside a string.
// Syntax - indexOf( searchString ) and lastIndexOf( searchString )
var string = "Hello, World!";
console.log( string.indexOf("o") ); // 4
console.log( string.indexOf("foo") ); // -1
//Similarly, lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.
var string = "Hello, World!";
console.log( string.lastIndexOf("o") ); // 8
console.log( string.lastIndexOf("foo") ); // -1

//Arrays, Maps, and Reduce (Done in backend classs)

//Exercise 4 - Live Word Stats Dashboard 
// Create a webpage that allows the suer input in paragraphs and show the real time stats:
// | Metric                          | Example Result             |
// | ------------------------------- | ---------------------------|
// | Total Characters                | 128                        |
// | Total Words                     | 24                         |
// | Unique Words                    | 19                         |
// | Top 3 Frequent Words            | the (5), world (3), is (2) |
// | Longest Word                    | transformation             |
// | Shortest Word (excluding <3)    | is                         |
// | Average Word Length             | 5.3                        |
// | Sentence Count (end with `.?!`) | 3                          |

// Stack - HTML, CSS(with clean UI and Cards and bar charts all), JS
// Live Update on key Press


{/* Lesson - 5 */}

// Funtions -  provide organized, reusable code to perform a set of actions. Everything defined within the 
// function is not accessible by code outside the function. Only code within this scope can see the entities defined inside the scope.
//Example - 
function foo() {
  var a = 'hello';
  function bar() {
    var b = 'world';
    console.log(a); // => 'hello'
    console.log(b); // => 'world'
  }
  console.log(a); // => 'hello'
  console.log(b); // reference error
}
console.log(a); // reference error
console.log(b);

//Using a return statement - The return statement is especially useful if you do not know in which context the function will be used yet
function firstChar(stringIn) {
  return stringIn.charAt(0);
}
console.log(firstChar("Hello world"));

//The return statement ends the function.
//Currying -  Currying is the transformation of a function of n arity or arguments into a sequence of n functions taking only one argument.
// Example - Rectangular prism can be explained by three factors - length, width, height.
var prism = function (l, w, h) {
  return l * w * h;
}

//Curried funtions is given below based on the above example
function prism(l) {
  return function (w) {
    return function (h) {
      return l * w * h;
    }
  }
}

//Named Funtions -  funtions can be named or unnamed

var namedSum = function sum(a, b) { // named
  return a + b;
}
var anonSum = function (a, b) { // anonymous
  return a + b;
}
namedSum(1, 3);
anonSum(1, 3);

//Names of funtion are private to their own scope
var sumTwoNumbers = function sum(a, b) {
  return a + b;
}
sum(1, 3); // Will give error because sum is private to it's scope.

//Named funtions are hoisted  - When using an anonymous function, the function can only be called after the line of declaration, whereas a named function can be called before declaration.
foo();
var foo = function () { // using an anonymous function
  console.log('bar');
} // Give error

foo();
function foo() { // using a named function
  console.log('bar');
}

{/* Exercise -5  */}  //Student Analytics System
// You have an array based on that make the analytics steps given below
const students = [
  { name: "Muskan", marks: [78, 85, 90], gender: "female" },
  { name: "Arjun", marks: [65, 70, 60], gender: "male" },
  { name: "Priya", marks: [90, 95, 100], gender: "female" },
  { name: "Ravi", marks: [45, 50, 40], gender: "male" },
];
// 1. Create array with student names and their average marks
// 2. Filter out student whose marks have average below 60.
// 3. Sort the remaining students by average in descending order.
// 4. Add rank based on position (1st, 2nd, etc.).
// 5. Bonus: Use slice and splice to: Remove the lowest-ranking student.Insert a new topper at the top.

{/* Exercise - 6 - Mini Game: Memory Card Matching */} 
// Objective: Build a responsive card-matching game (like Memory or Pairs).
// Key Challenges:
// Use JavaScript to manage game state, moves, and timer.
// Apply CSS animations for flip and match effects.
// Score tracking with best score stored in localStorage.
// Bonus: Add multiple difficulty levels (e.g., 4x4, 6x6 grid).


{/* Lesson-6 - Arrow funtion and this keyword */}
// this keyword gives the context of the currentfuntion based on the object we are calling.
// Example: 
const user = {
  username: 'muskan',
  price : 1000,

  message : function() {
    console.log(`${this.username} , welcome to this site`);
    console.log(`${this}`); 
  }
}
user.message()
user.username = 'Ram'
user.message()

//We are giving context which means values or variable, what they hold
//=() => This is out arrow funtion that we use
 const add = (num1, num2) => (num1 + num2) // can write without paranthesis 
 console.log(add(3,4));
 
 //If want to return object 
 const add1 = (num1, num2) => ({username: 'Muskan'}) // can write without paranthesis 

 //Now call and this
  function setUserName(username) {
    this.username = username
    // console.log("called");
    
  }

  function createUser(username, email, password) {
    // setUserName(username)
    setUserName.call(this, username)

    this.email = email
    this.password = password
  }

  const student = new createUser("MCA", "mca@gmail.com", "123" )
  console.log(student);
  
 
//Exercise : 1. What will be printed and Why?
 const machine = {
  name: "Washing Machine",
  start: function () {
    setTimeout(function () {
      console.log(`Starting: ${this.name}`);
    }, 1000);
  }
};

// 2. Create a constructor function User that sets name, email, and role.
// Then create an Admin function that reuses User using .call(), and adds an isAdmin flag.
function User(name, email, role) {
  this.name = name;
  this.email = email;
  this.role = role;
}
//Use .call() inside Admin to inherit from User
//Create an admin object and log it


{/* Lesson -7 - Classes , OOps and Bind*/}
// jese he classs se ek object initialize hoga , means when the keyword is used the constructor is called automatically.
class UserName {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass
  }

  encryptPassword() {
    return `${this.pass}abc`
  }

  changeUserName() {
    return `${this.username.toUpperCase()}`
  }
}

const name = new UserName("Muskan", "muskan@gmail.com", "123")
console.log(name.encryptPassword());
console.log(name.changeUserName());

//Another way of doing the same thing 
function UserName(username, email, pass) {
   this.username = username;
    this.email = email;
    this.pass = pass
}

UserName.prototype.encryptPassword = function() {
  return `${this.pass} abc`
}

UserName.prototype.changeUserName = function() {
  return `${this.username.toUpperCase()}`
}

const intern = new UserName("Muskan" , "muskan@gmail.com", "987")
console.log(intern.encryptPassword());
console.log(intern.changeUserName());


// Inheritance - the capability of one class to inherit properties from another class.
// the passing on of genetic traits from parents to their offspring, and these offspring get all the genetic information from their parents.

//Example: 
class interns {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username is ${this.username}`);
    
  }
}

class Teacher extends interns {
  constructor(username, email, pass) {
    super(username)
    this.email = email
    this.pass = pass
  }

  addCourse() {
    console.log(`A new course is added by ${this.username}`);
    
  }
}

const iname = new Teacher("muskan", "muskan@gmail.com", "123" )
iname.addCourse()
const teacher = new  interns("Tanu")
teacher.logMe()

// console.log(iname === teacher);
// console.log(iname instanceof interns);
// console.log(iname instanceof Teacher);

//Bind - purpose of bind() is to permanently set the this context for a function
//Example - in practice.html file.