function findData() {
  let dataOne = [
    {id:"1", name: "cristina", lastname: "rojas"},
    {id:"2", name: "efrain", lastname: "zamora"},
    {id:"3", name: "gonzalo", lastname: "santana"},
    {id:"4", name: "nayeli", lastname: "roldan"},
    {id:"5", name: "karolina", lastname: "castellanos"},
    {id:"6", name: "karolina", lastname: "castellanos"}
  ];

  let dataTwo = [
    {id:"0", product: "pepsi", price: "10"},
    {id:"5", product: "cocacola", price: "20"},
    {id:"3", product: "sprite", price: "30"},
    {id:"4", product: "fanta", price: "40"},
    {id:"6", product: "squert", price: "50"}
  ];

  let foundData = [];

  dataOne.forEach(itemOne => {
    dataTwo.forEach(itemTwo => {
      if (itemOne.id === itemTwo.id) {
        let completeObject = {};
        completeObject.id = itemOne.id;
        completeObject.name = itemOne.name;
        completeObject.lastname = itemOne.lastname;

        completeObject.product = itemTwo.product;
        completeObject.price = itemTwo.price;

        foundData.push(completeObject);
      }
    });
  });

  console.log('dataJoin --->', foundData);

}

findData();
