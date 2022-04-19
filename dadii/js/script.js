
//Generazione numeri random
const userNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, pcNumber);

//Qual è il numero più grande
let result = `Il tuo numero è ${userNumber}, il numero del pc è ${pcNumber}. ` ;
if (userNumber > pcNumber) {
        result += "Hai vinto User";
} else if (pcNumber > userNumber) {
    result += "Ha vinto pc";
} else {
    result += "pareggio";
}

//Stampa in html
console.log(result);
document.getElementById("print-result").innerHTML = result;