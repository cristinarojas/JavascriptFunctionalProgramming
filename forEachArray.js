// Tranversing Arrays with forEach

function runArrayForEach() {
  var names = ["cristina", "efrain", "gonzalo", "nayeli", "karolina"];

  var namesAndLastnames = [
    {name: "cristina", lastname: "rojas"},
    {name: "efrain", lastname: "zamora"},
    {name: "gonzalo", lastname: "santana"},
    {name: "nayeli", lastname: "roldan"},
    {name: "karolina", lastname: "castellanos"}
  ];

  names.forEach(function(item) {
    console.log('Data in Array---->', item);
  });

  namesAndLastnames.forEach(function(namesAndLastnames) {
    console.log('Data in Array of objects---->', namesAndLastnames.name, namesAndLastnames.lastname);
  });
}

runArrayForEach();
