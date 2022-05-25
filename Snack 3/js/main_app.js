/*
Snack3
-Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
*/

//Creo il mio array di numeri interi
const numeriInteri= [1,2,10,24,56,77,99,23,45]
console.log(numeriInteri)

// creo il mio ciclo
for(let i=0; i< numeriInteri.length;i++){
    

// Creo degli indici e degli array vuoti
let indicePari = false
let somma = 0

const pari = []
const dispari = []

//creo il mio ciclo per controllare se i miei numeri sono in indice pari o indice dispari
for (let i = 0; i < numeriInteri.length; i++) {
    if (i % 2 === 0) {
        indicePari = true
        console.log(numeriInteri[i], indicePari)
        pari.push(numeriInteri[i])
    } else {
        dispari.push(numeriInteri[i])
        somma += numeriInteri[i]
    }
}
console.log(pari,dispari,somma)
}
