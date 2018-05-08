
//Zadanie 1

function sayHello(hello,world) {
  conslole.log(${hello},${world});
}

//Zadanie 2

const multiply(x, y = 1) => { return x * y }

//Zadanie 3 i 4(nie wiem czy właściwie dodałam tablicę 'grades')

const average(1,3,6,7,9, ...grades) => average.forEach(average => console.log(average));

//Zadaenie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

const table = [...average, ...grades] => table.forEach(table => console.log(table));

//Zadanie 5

const other = [1, 4,'Iwona', false, 'Nowak'];
const [firstname,...rest, lastname] = other;
