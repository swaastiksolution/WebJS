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



{/* EXERCISE */}
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