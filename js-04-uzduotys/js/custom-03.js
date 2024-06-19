/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for (let i = 0; i < 10; i++) {
    console.log("labas");
}

console.log()
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (let i = 0; i < 10; i++)
    {console.log(i)}
console.log();


/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
for(let i = 10; i <= 50; i += 2) {
    console.log(i);
}

console.log()
/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for (let i = 10; i <= 50; i += 2) {
    cif (i % 10 === 0) 
    {continue;

    }
 console.log(i);

}
console.log();


/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
let counter = 0;
for (let i = o ; i <= 20; i++) {
    if (i % 2 === 0 ) {
        conter++;
    }
    }
console.log(counter);
counsole.log();

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/ 
let arr = []
counter = 0;

for(let i = 0; i < 300; i++) {
    const number = Math.floor(Math.random() * 301);
if(number > 150) {
    counter++;
}
if(numer > 275) {
    arr.push('[${numer}]');
} else {arr.push('${number}')}
}

console.log(...arr);
console.log(counter);
console.log();

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
let array = [];
for( let i = 77; i < 3000; i+= 77) {
    array.push(i);
}
console.log('${array}');
console.log;

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

const size = 10;
for (let i = 0 ; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++){
        line += "* ";
    }
console.log(line);
}