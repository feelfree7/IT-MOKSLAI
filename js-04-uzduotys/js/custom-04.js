/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
const augaluPavadinimai = [
"Roze",
"Tulpe",
"Kiaulpiene",
"Krienas",
"Gvazikas",
"Levandos",
"Fikusas",
"Alyvmedis",
"Petrazole",
"Ciobreliai",
];

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
for ( let i = 0; i < augaluPavadinimai.length - 1; i++) {
    console.log(augaluPavadinimai[i]);
}
console.log();
/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
for (let i = augaluPavadinimai.length - 1; i >= 0; i--) {
    console.log(augaluPavadinimai[i])
}
console.log();
/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
let ilgesniNeiPenkiSimboliai = 0;
let ilgesniNeiSeptyniSimboliai =0;

for(let i = 0; i < augaluPavadinimai.length - 1; i++) {
    if (augaluPavadinimai[i].length > 7) {
        ilgesniNeiPenkiSimboliai++;
        ilgesniNeiSeptyniSimboliai++;
    } else if(augaluPavadinimai[i].length > 5) {
        ilgesniNeiPenkiSimboliai++;
    }
}

console.log('Ilgesniu nei 5 simboliai: ${ilgesniNeiPenkiSimboliai}');
console.log('Ilgnesiu nei 7 simboliai: ${IlgesniNeiSeptniSimboliai}');