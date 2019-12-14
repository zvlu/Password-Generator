// Prompt to user to click options in check box area


// DOM ELEMENTS
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const showEl = document.getElementById('show');
const savecopyEl = document.getElementById('savecopy');
  
//OBJECT OF ALL FUNCTIONS
const randompassword = {
    lower: randomlowercase,
    upper: randomupcase,
    number: randomnumber,
    special: randomspecial,
};

//Password Customize Selection

showEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const cUpper = uppercaseEl.checked;
    const cLower = lowercaseEl.checked;
    const cNumbers = numbersEl.checked;
    const cSpecial = symbolsEl.checked;
     
    resultEl.innerText = createPassword(
        cUpper, 
        cLower, 
        cNumbers, 
        cSpecial, 
        length
    );
});

//copy to clip board

savecopyEl.addEventListener('click', () =>{
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
// Alerts User of PW Copy    
    alert('Password Copied')
})

// Generate Password Function

function createPassword (lower, upper, number, special, length){
    
    
    
    // 4. Add final password to password var and return
    // 1. Init a Password Var
    let createPassword = '';

    const typesCount = lower + upper + number + special;

    // 2. Filter unchecked boxes

    const typesArr = [{ lower }, { upper }, { number }, { special }].filter
    (item => Object.values(item)[0]
    
    );

    console.log('typesArr:', typesArr);

    // 2.b See if no boxes are checked

    if(typesCount === 0){

        return '';

    }
    // 3. Loop over the length and then call a generator function for each type

    for (let i = 0; i < length;i += typesCount){

        typesArr.forEach(type =>{

            const funcname = Object.keys(type)[0];
            //console.log('funcname:', funcname)
            createPassword += randompassword[funcname]();
        });
    }

    //slice everything but  1 because the length is dictated by typescount
    const finalpass = createPassword.slice(0, length);

    return finalpass;
    console.log(finalpass)

};

// Create 4 Different Functions

function randomnumber() {

    const numbers = '0123456789';

    return numbers[Math.floor(Math.random() * numbers.length)];

    
    

}

function randomspecial() {

    const specialadd = "!@#$%&*()_-+=[];:.?/";

    return specialadd[Math.floor(Math.random() * specialadd.length)];


}

function randomlowercase () {

    const lowercase = "abcdefghijklmnopqrstuvwXyz";

    return lowercase[Math.floor(Math.random()* lowercase.length)];
}

function randomupcase () {

    const upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return upcase[Math.floor(Math.random()* upcase.length)];
}




console.log( );