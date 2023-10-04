/* - Chiedere all'utente il numero di km da percorrere
        - Dichiara una variabile const 'numKM'
        - Salva all'interno di essa il risultato di un form 'Quanti km devi percorrere?'
        - Trasforma con parseInt la stringa in un numero */
let numKM = prompt('Quanti km deve percorrere il passeggero?')
numKM = parseInt(numKM)
console.log(numKM)

/* - Chiedere all'utente l'età del passeggero
        - Dichiara una variabile const 'numEtà'
        - Salva all'interno di essa il risultato di un form 'Quanti km devi percorrere?'
        - Trasforma con parseInt la stringa in un numero */
let numEta = prompt('Quanti anni ha il passeggero?')
numEta = parseInt(numEta)
console.log(numEta)
/* - Definire il prezzo totale del biglietto senza sconto
        - Dichiara una variabile const 'prezzoTotaleKM'
        - moltiplicare 0.21 per 'numKM'  */
const prezzoTotaleKM = 0.21 * numKM 
console.log(prezzoTotaleKM)
/* - Definire il totale dello sconto in base all'età
        - SE 'numEtà' < 18
        - ALLORA 
            - dichiara var 'scontoMinori'
            - var 'scontoMinori' = 'prezzoTotale' * (20 / 100) 
            - ALTRIMENTI SE 'numEtà' > 65
            - dichiara var 'scontoAnziani'
            - var 'scontoAnziani' = 'prezzoTotale' * (40 / 100) 
        -ALTRIMENTI
            - alert = 'nessuno sconto applicato' */
let valoreSconto

if (numEta < 18) {
    valoreSconto = prezzoTotaleKM * ( 20 / 100)
    console.log(valoreSconto)
    alert('Si applica lo sconto minori')
}
else if (numEta > 65) {
    valoreSconto = prezzoTotaleKM * ( 40 / 100)
    console.log(valoreSconto)
    alert('Si applica lo sconto anziani')
}
else { 
    valoreSconto = 0 ; 
    alert('Non si applica alcuno sconto')
}
/* - Definire il prezzo scontato
    - dichiarare una const 'prezzoFinale'
    - prezzoFinale = prezzoTotaleKM - prezzoSconto */
let prezzoFinale = prezzoTotaleKM - valoreSconto; 
console.log(prezzoFinale)
/* - Arrotondare il risultato a due decimali*/
prezzoFinale = prezzoFinale.toFixed(2);
console.log(prezzoFinale)

/* Stampare in pag il risultato */
const priceDomElement = document.getElementById('price');
priceDomElement.innerHTML = prezzoFinale
