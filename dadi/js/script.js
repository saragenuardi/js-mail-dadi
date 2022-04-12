//Richiesta all'utente dell'email
const list = [ "ciao@gmail.com, sonia@hotmail.it, sara@gmail.com "];

//Controllo con prompt in quale tipo di lista l'utente può accedere 
const control = prompt ('Con quale email vuoi accedere?');
console.log ('utente accede', control);

//verficare se c'è un'email tra quelle indicate
let listFound = false;
for (let i = 0; i < list.length; i++) {
    const thisList = list[i];
    if (thisList === control) {
        listFound = true;
    }
    console.log(thisList, "Ho trovato?", listFound);
}


console.log ("Risultato finale : ", listFound);

//OUTPUT
//Stampare l'esito
if (listFound === true) {
    document.getElementById("esito").innerHTML  = "Rientri nella lista, vuoi continuare?";
} else {
    document.getElementById("esito").innerHTML = "Ci dispiace, ma non rientri nella lista.";
}