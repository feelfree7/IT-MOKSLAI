
/* funkcija - 1 */

function kodelProgramuoju() {
console.log('Mano varrdas yra Denis. Programavimas man yra isukis')

kodelProgramuoju ();
kodelProgramuoju ();
kodelProgramuoju ();

}

/* 2 */

function poem () {

    console.log("У лукоморья дуб зелёный;");
    console.log("Златая цепь на дубе том:");
    console.log("И днём и ночью кот учёный");
    console.log("Всё ходит по цепи кругом;");
    console.log("Идёт направо — песнь заводит,");
}



poem ();
poem ();
poem ();
poem ();
poem ();



/* 3*/


function funkcija1 ()
{
console.log('Mano vardas yra Denis')



}

function funkcija2 () 
{
console.log ('As megstu futbola bei krepsini')


}

function funkcija3 ()

{console.log('Sirgsiu uz Anglijos Rinktine futbole ir krepsinije uz Lietuva')

}

funkcija1();
funkcija2();
funkcija3();

/* 4*/

function labas() {
    return 'Labas'
}

function vakaras() {
    return 'vakaras'
}

function passisveikinimas() {
return labas() + " " + vakaras ()

}
console.log(pasisveikinimas())


/* 5 */
function suma() {
let num1 = Math.round(Math.random() * 100)
let num2 = Math.round(Math.random() * 100)
let suma = num1 + num2
console.log('${num1} + ${num2} = ${suma}')
}

suma()
suma()
suma()

/* 6 */
function policininkas () {
let vardas = 'Jonas'
let pavarde = 'Jonaitis'
let amzius = 43
let alga = 4000
let etatas = 'pilnas'
let specializacija = 'kriminalistas'
console.log('Metu policininkas:\n${vardas} ${pavarde}, atlyginimas: ${alga}, etatas: ${etatas}, specializacija: ${specializaija}.')
}

policininkas()


/* 7 */
function desimtSkaciu() {
let skaiciai = []
for( let i = 0 ; i < 10; i++){
    skaiciai.push(Math.round(Math.random() * 100))
}
console.log(skaicia.join(" "))
}

for(let i = 0; i < 5; i++) {
    desimtSkaiciu()
}

/* 8 */
function atsitiktinisSkacius() {
let skaicius = Math.round(Math.random() * 100)
return skaicius 
}

for (let i = 0; i < 10; i++) {
    console.log(atsitiktinisSkacius()) 
}

/* 9*/

function labas(vardas) {
    console.log('Labas', vardas);
}

function atsisveikinti(vardas) {
    console.log('Viso gero', vardas)
}

let fname = 'Mantas';

labas(fname);
atsisveikinti(fname);

/*10*/

function numeriai(numeris1,numeris2)
{ if (numeris1 > numeris2) {
    console.log('$(numeris1} yra didesnis uz ${numeris2}');
}
else if (numeris2 > numeris1) {
    console.log('${numeris2} yra didesnis uz ${numeris1}');
}
else {console.log('Skaicia ${numeris1} ir ${numeris2} yra lygus')};

}

numeriai (5,10);
numeriai (3, 3);
numeriai (-3, 5);
numeriai (10, -9);

/* 11 */

function auto (brendas,  modelis, metai, turis) {
let automobilis = {
    marke:marke,
    modelis:modelis,
    metai:metai,
    turis:turis,
}
console.log('Automobilio duomenys: ')
for(raktas in automobilis)
    console.log(raktas + ": " + automobilis[raktas])
}

auto('Citroen,', 'C5X', 2023, 1.8)
auto('Peugeot', '5008', 2022, 1.2)

/* 12 */
function sudetis(num1, num2) {return '${num1} + ${num2} = ${num1} + ${num2}'}
function sudetis(num1, num2) {return '${num1} - ${num2} = ${num1} - ${num2}'}
function sudetis(num1, num2) {return '${num1} * ${num2} = ${num1} * ${num2}'}
function sudetis(num1, num2) {return '${num1} / ${num2} = ${num1} / ${num2}'}

function aritmetika() {
let num1 = Math.round(Math.random() * 100)
let num2 = Math.round(Math.random() * 100)

console.log(sudetis(num1, num2))
console.log(atimtis(num1, num2))
console.log(daugyba(num1, num2))
console.log(dalyba(num1, num2))
}

aritmetika()
aritmetika()
aritmetika()

/*13 */
function zodziai(zodziuMasyvas) {
for(let i = 0; i < zodziuMasyvas.length; i++) {
const zodis = zodziuMasyvas[i]
const ilgis = zodzis.length

console.log('${zodis} - ${ilgis} simboliai')

}
}

const zodziuMasyvas = ['Labas','rytas', 'Javascript', 'funkcija']
zodziai(zodziuMasyvas)

/* 14 */
function skaiciuOperacijos(skaiciuMasyvas) {
for (let i = 0; i < skaiciuMasyvas.length; i++) {
const skaicius = skaiciuMasyvas[i]
const kvadratas = skaicius * skaicius
const dalijimasIsDvieju = skaicius / 2
}

console.log('Skaicius: ${skaicius}, Kvadratas: ${kvadratas}, Dalijimas is dvieju: ${dalijimasIsDvieju}')
}

const pirmasMasyvas = [3, 4, 10 , 9]
const antrasMasyvas = [3, 1, 5, 8]

console.log('Pirmas masyvas:')
skaiciuOperacijos(pirmasMasyvas)

console.log('Antras masyvas:')
skaiciuOperacijos(antrasMasyvas)


/*15 */

function studentoInfo(vardas, pavarde , pazymiai){
    console.log('Studento vardas: ${vardas}')
    console.log('Studento pavarde: ${pavarde}')
    console.log('pazymiai: ${pazymiai.jon(', ')}')

    const vidurkis = pazymiai.reduce((suma, pazymys) => suma + pazymys, 0) / pazymiai.length
    console.log('Vidurkis: ${vidurkis.toFixed(2)}')
}

const studentas = {
vardas:'Jonas',
pavarde:'Jonaitis',
pazymiai:[7,6,5,4,10]
}
studentoInfo(studentas.vardas. studentas.pavarde. studentas.pazymiai)


/* 16 */
function rastiDidziausiaSk(skaiciuMasyvas) {
    if(skaiciuMasyvas.length === 0 ) {
        console.log('Masyvas tuscias')
        return
    }

const didziausias = Math.max(...skaiciuMasyvas)
console.log('Didziausias skaicius: ${didziausias}')
}


function generuotiAtsitiktiniusSk(masyvas, kiekis) {

    for(let i = 0; i < kiekis; i++) {
        masyvas.push(Math.floor(Math.random() * 100) + 1)
    }
}

const masyvas1 = []
const masyvas2 = []
const masyvas3 = []

generuotiAtsitiktiniusSk(masyvas1, 5)
generuotiAtsitiktiniusSk(masyvas2, 7)
generuotiAtsitiktiniusSk(masyvas3, 9)

rastiDidziausiaSk(masyvas1)
rastiDidziausiaSk(masyvas2)
rastiDidziausiaSk(masyvas3)

/* 17 */

function atgal() {
    return "Labas, Mama.";
}

console.log(atgal())

/* 18 */


function gaukSkaicius(min, max) {
    return Math.floor(Math.random() * 100); 
}

for (let i = 0; i < 5; i++) {
    const tiesogSkacius = gaukSkaicius(1, 100);
    console.log(`Atsitiktinis skaičius ${i + 1}: ${tiesogSkacius}`);
}


/* 19 */
function studentoVidurkis(vardas, vidurkis) {
    return `Studentas ${vardas} turi vidurkį ${vidurkis}.`;
}

console.log(sakinys("studentas1", 6.7));
console.log(sakinys("studentas2", 4.1));
console.log(sakinys("studentas3", 9.5));



/* 20 */

function raskMaziausiaSK(numeris) {
let daliklis = skaicius;
for(let i = 2; i <= skaicius; i++) {
if (skaicius % i === 0 ) {
daliklis = i;
break;
}
}
return daliklis;
}

for(let i = 10; i <= 30; i++) {
const daliklis = raskMaziausiaSK(i);
console.log('Maziausias daliklis skaiciui ${i} yra ${daliklis}')

}

/* 21 */
function arPirminis(skaicius) {
if (skaicius <= 1) {
return false;}
else if(skaicius <= 3) {
    return true;
} else if(skaicius % 2 === 0 || skaicius % 3 === 0) {
    return false;
}

let daliklis = 5;
while(daliklis * daliklis <= skaicius) {
    if (skaicius % daliklis === 0 || % (daliklis +2) === 0) {
return false;
}

daliklis += 6;
}
return true;
}

for(let i = 2; i <= 15; i++) {
    const pirminis = arPirminis(i);
    console.log('${i} ${pirminis}');
}

/*22 */
function sumaDu (sk1, sk2) {
return sk1 + sk2

}

function skirtumas(sk1, sk2) {
    return sk1 - sk2
}

function sandauga(sk1, sk2) {
    return sk1 * sk2
}



function dalyba(sk1, sk2) {
    return sk1 / sk2
}



function skaiciavimai() {
    const skaicius1 = Math.floor(Math.random() * 100);
    const skaicius2 = Math.floor(Math.random() * 100);
    const skaicius3 = Math.floor(Math.random() * 100);

    const rezultatas1 = sumaDu(skaicius1, skaicius2)
    const rezultatas2 = skirtumas(skaicius1, skaicius2)
    const rezultatas3 = sandauga(skaicius1, skaicius2)
    const rezultatas4 = dalyba(skaicius1, skaicius2)
    const rezultatas5 = sumaTrys(skaicius1, skaicius2, skaicius3)


    console.log('Skaicius 1: ${skaicius1}')
    console.log('Skaicius 2: ${skaicius2}')
    console.log('Skaicius 3: ${skaicius3}')

    console.log('Suma: ${skaicius1} + ${skaicius2} = ${rezultatas1}')
    console.log('Suma: ${skaicius1} - ${skaicius2} = ${rezultatas2}')
    console.log('Suma: ${skaicius1} * ${skaicius2} = ${rezultatas3}')
    console.log('Suma: ${skaicius1} / ${skaicius2} = ${rezultatas4}')
    console.log('Suma: ${skaicius1} + ${skaicius2} + ${skaicius3} = ${rezultatas5}')
}

skaiciavimai()

/* 23 */
function kokiaSuma(skaiciai) {
let suma = 0
for(let i = 0; i < skaiciai.length; i++) {
suma += skaiciai[i]
}
return suma
}
let m1 = [5, 10, 20, 30]
let m2 = [ 1, 5, 4, 60]

let suma1 = kokiaSuma(m1)
let suma2 = kokiaSuma(m2)

console.log('Masyvo 1 suma: ${suma1}')
console.log('Masyvo 2 suma: ${suma2}')


if (suma1 > suma2) {
console.log("Pirmo masyvo suma yra didesne")}
else if( suma2 > suma1) {
    console.log("Antro masyvo suma yra didesne")
} else {console.log("Abieju masyvu sumos yra lygios.")}


/* 24 */
function ilgiausiaZodis(zodziuMasyvas) {
if(zodziuMasyvas.length === 0) {
return "Masyvas yra tuscias."

}
 let ilgiausias = zodziuMasyvas[0]
 let ilgis = ilgiausias.length

for (let i = 1; i < zodziuMasyvas.length; i++) {
    let zodis = zodziuMasyvas[i]
    if(zdodis.length > ilgis) {
        ilgiausias = zodis
        ilgis = zodis.length
    }
}
return ilgiausias

}

const zodziai = ["Obuolys", "Bananas", "Kriause", "Mandarinas", "Avokadas"]

const ilgiausias = ilgiausiaZodis(zodziai)

console.log('Ilgiausias zodis: ${ilgiausias}')
console.log('Ilgis: ${ilgiausias.length}')


/* 25 */
function teigiamiPazymiai(pazymiai) {
for ( let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] < 0) {
        return false
    }
}
return true
}


function keiciamTekstu(atsakymas) {
return atsakymas ? "visi studento pazymiai teigiami" : "student turi bent viena neigiama pazymi"
}

let pazymiai1 = [ 8 , 6 , 4 , 4]
let pazymiai2 = [5, 4, -2, 9, 5]

const ats1 = teigiamiPazymiai(pazymiai1)
const ats2 = teigiamiPazymiai(pazymiai2)

console.log(keiciamTkestu(ats))
console.log(keiciamiTekstu(ats2))

/* funkcijos objektuose metodai 26 */

let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    dabartinisAtlyginimas: 1000,
    etatas: 1,
    skaiciuotiAtlyginima: function(procentai) {
        let naujasAtlyginimas = this.dabartinisAtlyginimas * (1 + procentai / 100)
    return naujasAtlyginimas
    }, 
    atlyginimoPokytis: function(naujasEtatas){
        let naujasAtlyginimas = this.dabartinisAtlyginimas * naujasEtatas
    let atlyginimoKitimas = this.dabartinisAtlyginimas - naujasAtlyginimas
return atlyginimoKitimas    
},
}

console.log('Dabartinis atlyginimas:', darbuotojas.dabartinisAtlyginimas);
let procentai = 10
let naujasAtlyginimas = darbuotojas.skaiciuotiAtlyginima(procentai)
console.log("Naujas atlyginimas po pakelimo", procentai + "%:", naujasAtlyginimas)

let naujasEtatas = 0.5
let atlyginimoKitimas = darbuotojas.atlyginimoPokytis(naujasEtatas)
console.log("Atlyginimo kitimas po etato pakeitimi", atlyginimoKitimas)



/* 27 */


function darbuotojai(vardas, pavarde, dabartinisAtlyginimas, etatas) {
    return {
        vardas: vardas,
        pavarde: pavarde,
        dabartinisAtlyginimas: dabartinisAtlyginimas,
        etatas: etatas,
        skaiciuotiAtlyginima: function(procentai) {
            let naujasAtlyginimas = this.dabartinisAtlyginimas * (1 + procentai / 100);
            return naujasAtlyginimas;
        },
        atlyginimoPokytis: function(naujasEtatas) {
            let naujasAtlyginimas = this.dabartinisAtlyginimas * naujasEtatas;
            let atlyginimoKitimas = naujasAtlyginimas - this.dabartinisAtlyginimas;
            return atlyginimoKitimas;
        }
    };
}

let darbuotojai1 = [
    darbuotojai('Jonas', 'Jonaitis', 1000, 1),
    darbuotojai('Petras', 'Petraitis', 1200, 0.75),
    darbuotojai('Ona', 'Onaite', 900, 1)
];

    darbuotojai1.forEach(darbuotojas => {
    console.log('Vardas:', darbuotojas.vardas);
    console.log('Pavarde:', darbuotojas.pavarde);
    console.log('Dabartinis atlyginimas:', darbuotojas.dabartinisAtlyginimas);
    console.log('Etatas:', darbuotojas.etatas);

    let procentai = 10;
    let naujasAtlyginimas = darbuotojas.skaiciuotiAtlyginima(procentai);
    console.log('Naujas atlyginimas po pakelimo', procentai + '%:', naujasAtlyginimas);

    let naujasEtatas = 0.5;
    let atlyginimoKitimas = darbuotojas.atlyginimoPokytis(naujasEtatas);
    console.log('Atlyginimo kitimas po etato pakeitimo:', atlyginimoKitimas);

    console.log('---');
});