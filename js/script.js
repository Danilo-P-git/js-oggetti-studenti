$(document).ready(function() {


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
$("#show").click(function() {

  var studentTemplate = $("#entry-template").html();
  var template = Handlebars.compile(studentTemplate);

  for (var i = 0; i < arrayObjectStudenti.length; i++) {
    $("#student-list").append(template(arrayObjectStudenti[i]))
  }
});

$("#add").click(function(){
       var newStudent = {
           "nome": $("#nome").val(),
           'cognome': $("#cognome").val(),
           "eta": $("#eta").val()
       }

       console.log(newStudent);

       $("#nome").val("");
       $("#cognome").val("");
       $("#eta").val("");
       arrayObjectStudenti.push(newStudent);
       console.log(arrayObjectStudenti);
   });




});
