/*Snack2
-Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// creiamo il nostro primo array con i nomi dentro 
let listaNomi = ["Paolo", "Matteo", "Fulvio", "Martina","Michela","Laura"];

// creiamo il nostro secondo array con i cognomi dentro
let listaCognomi = ["Pugliese", "Rossi" ,"Lico", "Sgavicchia", "Sambucini", "Gissi"];

//Creo il mio terzo array vuoto dove andrò ad inserire nomi e cognomi degli invitati
const listaCompleta = [];

console.log(listaNomi,listaCognomi);



// creo la mia variabile
for(let i = 0 ; i < 5 ; i++){

    // tramite una costante creo il mio nuovo array, unendo i nomi e i cognomi delle prime due liste
    const nomeCompleto = listaNomi[Math.floor(Math.random() * listaNomi.length)] + " "+ listaCognomi[Math.floor(Math.random() * listaCognomi.length)];
    listaCompleta.push(nomeCompleto);
}
console.log(listaCompleta)


console.log("--------------------------------------------------")

// Secondo metodo per risolvere il problema

let indiceNomi = ["Valerio" , "Andrea", "Marcello", "Simone"];
let indiceCognomi = ["Silvestri", "Chiave", "maestro", "Mondo"];

const casualNameSurname=[];

for(let i=0 ; i< indiceNomi.length; i++){

    let num = Math.floor(Math.random() * 6); /*Qui possimao mettere anche il nome variabile.length al posto del numero*/
    let numSecond = Math.floor(Math.random() * 6)/*Qui possimao mettere anche il nome variabile.length al posto del numero*/

    const nuovoNomeCognome = indiceNomi[num]+ " " + indiceCognomi[numSecond];
    casualNameSurname.push (nuovoNomeCognome);
}
console.log(casualNameSurname)

