/*
Snack1
-Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

// Creiamo il nostro array con i numeri al suo interno
const contenitoreNumeri = []
const alertResult = document.getElementById("alertResult")

// Creiamo il prompt per richiedere all'utente di inserire un numero
const inserisciNumeri = prompt ("Inserisci un numero qui dentro")

for(let i = 0 ; i<100 ; i++){
    contenitoreNumeri.push(parseInt(inserisciNumeri))

    // creiamo la condizione secondo cui se un numero è multiplo di 2 allora stamperemo il numero in console
    if(parseInt(inserisciNumeri) % 2 === 0){

        alertResult.innerHTML = "Numero multiplo di 2"
        alertResult.classList.add("alert-success")
        alertResult.classList.remove("alert-danger")
        console.log(inserisciNumeri)
        
    }else{
        // volevo mettere un messaggio di errore ma mi esce lo stesso risultato ripetuto più volte domandare al prof
        // console.error("Questo numero non è divisibile per 2")
        console.log(parseInt(inserisciNumeri) + 1)
        alertResult.innerHTML = "Il da te messo non è un divisibile per 2"
        alertResult.classList.remove("alert-success")
        alertResult.classList.add("alert-danger")
    }
}