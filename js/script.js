// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studObject = {
  'nome': 'Danilo',
  'cognome': 'Patanè',
  'eta': '22',
};

for (var k in studObject) {
  console.log(k + ":" + studObject[k]);
}


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome


var arrayObjectStudenti = [
  {
    'nome': 'Danilo',
    'cognome': 'Patanè',
    'eta': '23',
  },
  {
    'nome': 'Francesco',
    'cognome': 'Mazzarri',
    'eta': '23',

  },
  {
    'nome': 'Giuseppe',
    'cognome': 'Longo',
    'eta': '23',

  },
];
for (var i = 0; i < arrayObjectStudenti.length; i++) {
  for (var k in arrayObjectStudenti[i]) {
    console.log( k + ": " + arrayObjectStudenti[i][k]);
  }
}


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nomeNuovoUtente = prompt("inserisci il tuo nome");
var cognomeNuovoUtente = prompt("inserisci il tuo cognome");
var etaNuovoUtente = prompt("inserisci la tua età")
