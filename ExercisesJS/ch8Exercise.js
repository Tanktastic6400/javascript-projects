/*
let practiceFile = [273.15];
console.log(practiceFile);
practiceFile.push(42);
console.log(practiceFile);
practiceFile.push("hello");
console.log(practiceFile);
practiceFile.push(false, -4.6, "87");
console.log(practiceFile);
*/
// pt2

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
//console.log(cargoHold);

cargoHold[5] = 'space tether';
//console.log(cargoHold);

console.log("popped " + cargoHold.pop());
//console.log(cargoHold);

console.log("shifted " + cargoHold.shift());
//console.log(cargoHold);

cargoHold.unshift('20 meters');
cargoHold.push(1138);
//console.log(cargoHold);


//pt3
/*
cargoHold.splice(3, 0, 'keys');
cargoHold.splice(2, 3, 'cat','fob','string cheese');
console.log(cargoHold);
*/

//pt 4
/*
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let holdCabinet3 =[];

holdCabinet3 = holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
console.log(holdCabinet3);

holdCabinet1.slice(0, 2);
console.log(holdCabinet1);

holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);
*/

//pt 5
/*
let str = 'In space, no one can hear you code.'

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

let arr= ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
*/

//pt6
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
let test;
let table = [element1, element2, element26];

console.log(table);

console.log(table[1]);
console.log(table[1][1]);

console.log(table[0][2], table[1][2], table[2][1]);