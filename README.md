/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Formule:
prezzo base = numero km * prezzo per ogni km
sconto = prezzo base * entità sconto / 100
prezzo scontato = prezzo base - sconto */

/* - Chiedere all'utente il numero di km da percorrere
        - Dichiara una variabile const 'numKM'
        - Salva all'interno di essa il risultato di un form 'Quanti km devi percorrere?'
        - Trasforma con parseInt la stringa in un numero */
/* - Chiedere all'utente l'età del passeggero
        - Dichiara una variabile const 'numEtà'
        - Salva all'interno di essa il risultato di un form 'Quanti km devi percorrere?'
        - Trasforma con parseInt la stringa in un numero */
/* - Definire il prezzo totale del biglietto senza sconto
        - Dichiara una variabile const 'prezzoTotaleKM'
        - moltiplicare 0.21 per 'numKM'  */
/* - Definire il totale dello sconto in base all'età
        - SE 'numEtà' < 18
        - ALLORA 
            - dichiara var 'scontoMinori'
            - var 'scontoMinori' = 'prezzoTotale' * (20 / 100) */
        - ALTRIMENTI SE 'numEtà' > 65
            - dichiara var 'scontoAnziani'
            - var 'scontoAnziani' = 'prezzoTotale' * (40 / 100) */
        -ALTRIMENTI
            - alert = 'nessuno sconto applicato'
/* - Definire il prezzo scontato*/
/* - Arrotondare il risultato a due decimali*/