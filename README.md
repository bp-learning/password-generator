# Workshop - Password Generator

- Step 1: Use codesandbox for setup web project
Login into https://codesandbox.io/ and select new project from template, choose Vanilla JavaScript.
You can use [VS Code](https://code.visualstudio.com/) also.

- Step 2: Three Components of a Web Page
    - Content - HTML
    - Presentation - CSS
    - Behaviour - JavaScript

- Step 3: Update the html file to create a mock like the below image.

![](./images/image1.PNG)


```html
  <h2>Click Me!</h2>
    <div class="container">
        <div class="btn-container"> 
            <button class="item">1</button>
            <button class="item">2</button>
            <button class="item">3</button>
        </div>
        <div class="btn-container"> 
            <button class="item">4</button>
            <button class="item">5</button>
            <button class="item">6</button>
        </div>
        <div class="btn-container"> 
            <button class="item">7</button>
            <button class="item">8</button>
            <button class="item">9</button>
        </div>
    </div>
    <p id="para"></p>
```

- Step 4: Link your css file to your html file by giving the below code in your head element.

```html
<link rel="stylesheet" href="./styles.css">
```
- Step 5: Try to center align the body.
```css
body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}
```
- Step 6: Try to give background color and font color to the body.
```css
body{
    background-color: rgb(173, 229, 243);
    color:#b6e6f1;
}
```
- Step 7: Understanding the hexadecimal color codes.

A hexadecimal color is specified with: #RRGGBB.

RR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF specifying the intensity of the color.

For example, #0000FF is displayed as blue, because the blue component is set to its highest value (FF) and the others are set to 00.

- Step 8: Try to give display of flex to each button container.
```css
.btn-container{
    display: flex;
    flex-direction: row;
}
```

- Step 9: Try to give width, height of 60px and margin of 2px to button elements using css selector.
```css
button{
    width: 60px;        
    height: 60px;
    margin: 2px;
}
```

- Step 10: Try to give font color to #1212b6 and remove the border using css.
```css
button{
   color: #1212b6; 
   border: none;
}
```

- Step 11: Adding behaviour to the webpage

Select all the button elements and p element using javascript
```js
const buttons = document.querySelectorAll("button");
const para = document.getElementById("para");
```

- Step 12: Understand var, let and const
    - var : function scope
    - let and const : block scope

```javascript
function foo() {
    var a = 5;
    var b = 10;
    var c = a + b;
}
foo();
console.log(c);
```

```javascript
function foo() {
    var a = 5;
    var b = 10;
    const c = a + b;
    if (b > a) {
        let c = a + b;
    }
    console.log(c);
    return c;
}
const sum = foo();
console.log(sum);
```

- Step 13: Creating a color class and giving background color to blue, font color to white and cursor to pointer using css selector.
```css
.color{
    background-color: blue;
    color: white;
    cursor: pointer;
} 
```

- Step 14: Try adding the color class on clicking the button using js.
```js
for(btn in buttons){
    buttons[btn].onclick = function(){
        buttons.forEach(
            (function(item){
            item.classList.remove('color');
        } ))
        this.classList.add('color'); 
    }   
}
```
- Step 15: Understanding forEach and for in methods.

The forEach() method calls a function for each element in an array.
```js
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)
function myFunction(num) {
  console.log(num)
}
```

The for..in loop in JavaScript allows us to iterate over all property keys of an object.
```js
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(key);
}
```

- Step 16: Try adding the content in p element using js.

Add the below code to your onclick function.
```js
para.innerHTML = `You clicked ${this.innerHTML}!`;
```

- Step 17: Check your output.

![](./images/image2.PNG)

- Step 18: Calling a function when a button is clicked and getting content inside an element:
```html
<button onclick="myFunction()">Click me</button>

<p id="demo"></p>
```
```js
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```
- Step 19: Remove method from html and bind the click event in javascript
```html
<button id="submitBtn">Click me</button>

<p id="demo"></p>
```
```js
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```

- Step 20: Understanding functions in javascript

    In JavaScript, we can divide up our code into reusable parts called functions.
    - Function Decalration
       ```javascript
       function add(a, b) {
           return a + b;
       }
       ```
    Question: Write a function for adding three numbers
    - Function Expression
      ```javascript
      const add = function(a,b) {
          return a + b;
      }
      ```
    Question: Write a function for adding three numbers
    - Arrow function
      ```javascript
      const add = (a,b) => a + b;
      ```
    - Calling a function
      ```javascript
      const c = add(4,5);
      console.log(c);
      ```
    - Return Statement

      The return statement stops the execution of a function and returns a value.
      ```js
      function isAdult(age){
        if(age>18){
            return true;
        }
        return false;
      }

      isAdult(21); //calling the function
      >> true
      ```
    - Anonymous Functions

      An anonymous function is a function without a name.
      ```js
      const print = function() {
      console.log('Anonymous function');
      };

      print();
      ```
      Because we need to call the anonymous function later, we assign the anonymous function to the <mark style="background-color:lightblue">print</mark> variable.

- Step 21: Function as a first class citizen and Higher Order Function

*When a function can be passed as a normal argument just like number or string, this feature is called Function as first class citizen*

Example: In setTimeout, a function is passed for later use. The passed function is called callback function, and the function which can accept another function as an argument is called Higher Order Function.

**Def: Any function which takes function as an argument or return function is called Higher Order Function**

```js
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```

- addEventListener is also a Higher Order Function,
- myFunction passed in the addEventListner is a callback function.

- Step 22: **Getting values of various form inputs(text, checkbox, select) through js.**

   Try creating a simple form like the below image:

   ![](./images/image3.PNG)

   ```html
    <form id="form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
        <label for="age">Age</label>
        <input type="number" id="age" name="age" min="1 max="100" required>
        <label for="gender">Gender</label>
        <select name="gender" id="gender" required>
            <option value="male">M</option>
            <option value="female">F</option>
        </select>
        <div>
            <label for="rural">Rural community</label>
            <input type="checkbox" id="rural">
        </div>
        <button type="submit" id="submit">Submit</button>      
    </form>  
     <p id="para"></p>
   ```
   ```css
   body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    }
    
    form{
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px;
        padding: 50px;
    }
    
    input,select{
        margin-bottom: 10px;
        border: none;
        padding: 5px;
        font-size: medium;
    }
    
    label{
        font-size: larger;
        color: rgb(103, 38, 133);;
    }
    
    input[type="checkbox"]
    {
        vertical-align:middle;
    }
    button{
        border-radius: 5px;
        border: 2px solid rgb(103, 38, 133);
        width: 80px;
        font-size: medium;
        padding: 2px;
        font-weight: bold;
        color:rgb(103, 38, 133); 
        background-color: rgb(248, 245, 248);
    }
    
    p{
        margin-top: 50px;
        font-size: larger;
    }

   ```
- Step 23: Try getting the values of form input fields on submit.

```js
const form = document.getElementById("form");
const para = document.getElementById("para");

form.addEventListener('submit', isEligible);

function isEligible(event) {
    event.preventDefault()
    const age = this.elements.age.value;
    const gender = this.elements.gender.value;
    const checked = this.elements.rural.checked; 
    console.log(age,gender,checked);
}
```
Check your console.

Step 24: Try creating a function to check the eligibility criteria for marriage in India (If rural community is checked, age can be 2 years less).

```js
function isEligible(event) {
    event.preventDefault()
    const age = this.elements.age.value;
    const gender = this.elements.gender.value;
    const checked = this.elements.rural.checked; 

    let value =""; 

    if(age>=18 && gender == "female"){
        value = "You are eligible!";
    }else if(age>=21 && gender == "male"){
        value = "You are eligible!"
    }else if(checked && (age>=16 && gender == "female")){
        value = "You are eligible!"
    }else if(checked && (age>=19 && gender == "male")){
        value = "You are eligible!"
    }else{
        value = "Not Eligible!"
    }   

    para.innerHTML = value;
}
```
![](./images/image4.PNG)

- Step 25: Generating Random Numbers in javascript






