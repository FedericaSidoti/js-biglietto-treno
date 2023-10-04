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
if (numEta < 18) {
    const scontoMinori = prezzoTotaleKM * ( 20 / 100)
    console.log('scontoMinori')
}
else if (numEta > 65) {
    const scontoAnziani = prezzoTotaleKM * ( 40 / 100)
    console.log('scontoAnziani')
}
else {
    alert('Non si applica alcuno sconto')
}
/* - Definire il prezzo scontato*/
/* - Arrotondare il risultato a due decimali*/