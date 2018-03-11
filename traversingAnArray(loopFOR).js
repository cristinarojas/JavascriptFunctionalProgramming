// Tranversing Arrays with FOR

function runArray() {
  var names = ["cristina", "efrain", "gonzalo", "nayeli", "karolina"];
  var namesAndLastnames = [
    {name: "cristina", lastname: "rojas"},
    {name: "efrain", lastname: "zamora"},
    {name: "gonzalo", lastname: "santana"},
    {name: "nayeli", lastname: "roldan"},
    {name: "karolina", lastname: "castellanos"}
  ];

  console.log('Array -->', names);
  console.log('Array of Objects -->', namesAndLastnames);

  for(var counter = 0; counter < names.length; counter++) {
    console.log('Pinting Array --->', names[counter]);
  }

  for(var i = 0; i < namesAndLastnames.length; i++ ) {
    console.log('Pinting Array of objects --->', namesAndLastnames[i].name, namesAndLastnames[i].lastname);
  }
}

runArray();
