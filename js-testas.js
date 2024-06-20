/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

function eurasToDollar(euros) {
const kursas = 1.1; 
return euros * kursas;
}


let atsitiktinisEurSkaicius = Math.floor(Math.random() * 1000) + 1;


let atitinkamaSumaDolleris = eurasToDollar(atsitiktinisEurSkaicius);
console.log(`Atsitiktinis EUR kiekis: ${atsitiktinisEurSkaicius} EUR`);
console.log(`Atitinkama suma doleriais: ${atitinkamaSumaDolleris.toFixed(2)} USD`);
  


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function dollarToEuras(doleriai) {
    const kursas1 = 0.93; 
    return doleriai * kursas1;
}


let atsitiktinisDoleriuSkaicius = Math.floor(Math.random() * 1000) + 1;


let atitinkamaSumaEurais = dollarToEuras (atsitiktinisDoleriuSkaicius);
console.log(`Atsitiktinis doleriu kiekis: ${atsitiktinisDoleriuSkaicius} USD`);
console.log(`Atitinkama suma eur: ${atitinkamaSumaEurais.toFixed(2)} EUR`);



/*

3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/





/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/



/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/





/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

//* neisejo man padaryti kad nebutu bruksniuku//*
let rezultatas = ''; 

for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        rezultatas += i; 
    } else {
        rezultatas += `-${i}`; 
    }
}

console.log(rezultatas);



/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/


for (let i = 1; i <= 5; i++) {
let line = '';
for (let j = 1; j <= i; j++) {
line += '*';
}

    console.log(line);
}




/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardas = ["Petras", "Mantas", "Robertas", "Denis"];
let vardasK = '';
let vardasP = '';

for (let i = 0; i < vardas.length; i++) {
    vardasK += vardas[i];
    vardasP += vardas[i];

    if (i !== vardas.length - 1) {
        vardasK += ',';
        vardasP += '+';
    }
}

console.log(vardasK); 
console.log(vardasP);




/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
