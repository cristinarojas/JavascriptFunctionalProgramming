function palindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase(); // remueve caracteres  /\ y pasa a minusculas
  return (str == str.split('').reverse().join(''));
}

console.log(palindrome("levels"));                   // logs 'true'
console.log(palindrome("level"));                  // logs 'false'


// str.split(" ") How,are,you,doing,today? // DIVIDE O SEPARA CADA QUE SE ENCUENTRA UN ESPACIO Y REGRESA UN NUEVO ARRAY.
// str.split(""); H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,? DIVIDE O SEPARA CADA LETRA Y REGRESA UN NUEVO ARRAY.


// var num = [1, 2, 3, 4];
// num.reverse()  4,3,2,1

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.join() Banana,Orange,Apple,Mango UNE LOS ELEMENTOS DE UN ARRAY EN UNA CADENA Y LOS SEPARA POR COMAS (DEFULT)
// fruits.join("-") Banana-Orange-Apple-Mango LE PUEDO ESPECIFICAR LA UNION

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; // REBANADA
// var citrus = fruits.slice(1,4); Orange,Lemon,Apple (index del array y el item tal cual)
