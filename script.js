//1.  Getting the reference of html element in javascript

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}


//2.  Adding a function on click of a button or a element using addEventListener
//3. Getting the content inside a div or a tag (innerText, innerHTML)
//4. Defining functions - All the types of function(function declaration, fucntion expression, arrow function)
//4. What will happen if you use return statement in a function(the code below will not execute)
//5. What is Function as first class citizen
//6. wAht is a higher order function

// function isAdult(age) {
//     if (age > 18) {
//         return true;
//     }

//     return false;
// }


const copyToClipboard  = () =>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){return}

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    // 5. Search in google how to copy a text in clipboard using javascript
    document.execCommand('copy')
    textarea.remove()
    alert("Password copied to clipboard!")
}

clipboardEl.addEventListener('click', copyToClipboard); //copyToClicpboard is a callback function

// Anynomous function

// 

const generatePasswordHandler = () => {
    const length = +lengthEl.value
    // how to get the checkbox value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber,hasSymbol,length)
};

generateEl.addEventListener("click", generatePasswordHandler);

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol

    // Filter function of an array
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0){
        return ''
    }

    for(let i=0;i< length; i+=typesCount){
       typesArray.forEach(type => {
        const funcName = Object.keys(type)[0]
        generatedPassword += randomFunc[funcName]()
       })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

// Generating a random number
// Generating a random number in a range
// Talk about charCode
// "Ayesha".charCodeAt(0) // 65 -> Every charactor has a char code(ASCII)
// Every number can also be converted into char
// String.fromCharCode(65);


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]+<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

