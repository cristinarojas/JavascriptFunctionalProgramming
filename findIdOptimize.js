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
  let mergedObject = {};

  dataOne.forEach(itemOne => {
    const data = dataTwo.filter(itemTwo => itemOne.id === itemTwo.id);

    if (data.length > 0) {
      mergedObject = Object.assign({}, itemOne, data[0]);

      foundData.push(mergedObject);
    }
  });

  console.log('dataJoin --->', foundData);

}

findData();
