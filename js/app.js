// input utente
var parola = prompt('inserire parola');
// espressione regolare per il controllo sui caratteri
var letters = /^[A-Za-z]+$/;
/* funzione per controllo caratteri che con esito positivo
richiama e inizia la funzione del palindromo con i valori che ha
in caso contrario chiede all'utente di inserire delle lettere e fa refresh del browser
la funzione non deve ritornare un risultato quindi non ha return*/
////quindi inizio richiamando la funzione di controllo carattere/////////////
checkChar(parola);
//////funzione di controllo e avvio programma//////////
function checkChar(input){
  if(input.match(letters)){
    checkPalindromo(input);
  }else{
    alert('inserire lettere');
    location.reload();
  }
}
/* creo una funzione che non deve ritornarmi nulla perche coparera 2 stringhe 
e stampera solo un alert a video*/
function checkPalindromo(string){
    // creo variabile con stringa vuota a cui verra aggiunta la parola al contrario
    var stringeReverse = '';
    // faccio un ciclo for per inserire la parola al contrario all'interno di una variabile 
    for (var i = string.length -1; i>=0 ; i--){
        stringeReverse += string[i];
      }
      //controllo se le due stringhe sono uguali e stampo il risultato
      string === stringeReverse ? alert('palindromo') : alert('non e palindromo');
      
}



