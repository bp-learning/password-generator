const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

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

clipboardEl.addEventListener('click', copyToClipboard); 

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
    let generatedPassword = '';

    if (lower || upper || number || symbol){

        while(generatedPassword.length < length) {
            if(lower) generatedPassword += getRandomLower();
            if(upper) generatedPassword += getRandomUpper();
            if(number) generatedPassword += getRandomNumber();
            if(symbol) generatedPassword += getRandomSymbol();
        }
    }
    
    return generatedPassword;
}

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
