var studObject = {
  'nome': 'Danilo',
  'cognome': 'Patanè',
  'eta': '22',
};

for (var k in studObject) {
  console.log(k + ":" + studObject[k]);
}

var arrayObjectStudenti = [
  {
    'nome': 'Danilo',
    'cognome': 'Patanè',
  },
  {
    'nome': 'Francesco',
    'cognome': 'Mazzarri',
  },
  {
    'nome': 'Giuseppe',
    'cognome': 'Longo',
  },
];
for (var i = 0; i < arrayObjectStudenti.length; i++) {
  for (var k in arrayObjectStudenti[i]) {
    console.log(arrayObjectStudenti[i][k]);
  }
}
