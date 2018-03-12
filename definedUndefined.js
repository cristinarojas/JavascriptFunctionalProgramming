(function(){
  var a = b = 3;  // Estoy declarando las variables y definiendoles un valor y es de tipo number.
  var c;  // undefined esta declarada pero no tiene un valor asignado.
  var d; // undefined esta declarada pero no tiene un valor asignado.
  console.log("a", typeof a); // number
  console.log("b",  typeof b); // number
  console.log("c",  typeof c); // undefined
  console.log("d",  typeof d); // undefined
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
