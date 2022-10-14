const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
 "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

let passwordLength = 12

function genRandomChar(){
    let getPassword1 = Math.floor(Math.random()*characters.length)
    return characters[getPassword1]
} 

function genPassword(){
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += genRandomChar()      
    }
    pass1El.textContent =  randomPassword 
    let randomPassword2 = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword2 += genRandomChar()      
    }
    pass2El.textContent =  randomPassword2 
}



