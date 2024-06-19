/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = 'Denis';
let pavarde  = 'Teleš';
let gimMetai = 1992;
let metai = new Date().getFullYear()

console.log('"As esu ${vardas} ${pavarde}. Man yra ${metai-gimMetai} metai".')

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let kintamasis1 = Math.round(Math.random()*4)
let kintamasis2 = Math.round(Math.random()*4)
console.log('antros pradzia');

if(kintamasis1 == 0 || kintamasis2 ==0) {
    console.log('Paskaiciuot neiseina nes viena is reiksmiu 0')
 } else if(kintamasis1 > kintamasis2) {
    console.log((kintamasis1/kintamasis2).toFixed(2), 'pirmas dalintas is antro')
} else if (kintamasis2 > kintamasis1) {
    console.log(Math.round(kintamasis2/kintamasis1*100)/100, 'antras dalintas is pirmo');
} else if(kintamasis1 == kintamasis2) {
    console.log(Math.round(kintamasis1/kintamasis2*100)/100,'skaiciai buvo vienodi');
}
console.log('antros pabaiga');

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let kintamasis4 = Math.round(Math.random()*25)
let kintamasis5 = Math.round(Math.random()*25)
let kintamasis6 = Math.round(math.random()*25)


if(kintamsis4 > kintamsis5 && kintamsis4 < kintamasis6) {
    console.log(kintamasis4,'kintamasis vidurinis');
} else if (kintamasis4 < kintamasis5 && kintamasis4 > kintamasis6) {
    console.log(kintamasis4,'kintmasis vidurinis');
} else if(kintamasis5 > kintamasis4 && kintamasis5 < kintamasis6) {
    console.log(kintamasis5,'kintamasis5 vidurinis');
} else if (kintamasis5 < kintamasis4 && kintamasis5 > kintamasis6) {
    console.log(kintamasis5,'kintamasis5 vidurinis');
} else if (kintamasis6 > kintamasis4 && kintamasis6 < kintamsis5) {
    console.log(kintamasis5,'kintamasis6 vidurinis');
} else if (kintamasis6 < kintamasis4 && kintamasis6 > kintamasis5) {
    console.log(kintamasis5,'kintamasis6 vidurinis');
} else if(kintmasis4 == kintamsis5 || kintamsis6 || kintamsis6 == kintamsis5) 
    {console.log('Sutampa keli kintamieji del to palygint neiseina')}


/* trikampio alternatyva */
function isTriangle (a,b,c)
{if(a <= 0 || b <= 0 || c <= 0){
    return false}
    else if ( a + b <= c || a + c <= b || b + c <= a) {
        return false}
        else if (a + b > c || a + c > b || b + c > a) {
            return true
        }
    }



/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = math.ceil(Math.random() * 10);
let kr2 = math.ceil(Math.random() * 10);
let kr3 = math.ceil(Math.random() * 10);
console.log(kr1,kr2,kr3);
if(kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr3 + kr2 > kr1) {
    console.log('trikampi sudaryt iseis')
}
 
else{
    console.log('trikampis neisies')
}


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let kint1 = Math.round(Math.random() * 2)
let kint2 = Math.round(Math.random() * 2)
let kint3 = Math.round(Math.random() * 2)
let kint4 = Math.round(Math.random() * 2)
let sum0 = 0;
let sum1 = 0;
let sum2 = 0;

console.log(kint1,kint2,kint3,kint4)
if(kint1 == 1) {sum0++}
else if (kint1 == 1){sum1++}
else if(kin1 == 2){sum2++}
if(kint2 == 0){sum0++}
else if(kint2 == 1) {sum1++}
else if(kint2 == 2){sum2++}
if(kint3 == 0){sum0++}
else if (kint3 == 1)
{sum1++}
else if (kint3 == 2){sum2++}
if (kint4 == 0){sum0++}
else if(kint4 == 1){sum1++}
else if(kint4 == 2){sum2++}

console.log('SUma0:', + sum0, 'Suma1:' + sum1,'Suma 2:' + sum2)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let sk1 = Math.floor(Math.random() * 21) - 10
let sk2 = Math.floor(Math.random() * 21) - 10
let sk3 = Math.floor(Math.random() * 21) - 10



if(sk1 < 0) {
    console.log('[${sk1}]')
}else if (sk1 == 0) { 
    console.log('(${sk1}))')
} else if(sk1 > 0 )
    {console.log('{${sk1}}')}



if(sk2 < 0) {
    console.log('[${sk2}]')
}else if (sk2 == 0) { 
    console.log('(${sk2}))')
} else if(sk2 > 0 )
    {console.log('{${sk2}}')}



if(sk3 < 0) {
    console.log('[${sk3}]')
}else if (sk3 == 0) { 
    console.log('(${sk3}))')
} else if(sk3 > 0 )
    {console.log('{${sk3}}')}





/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let zvaviuKiekis = Math.floor(Math.random() * 2996 + 5);
if (zvakiuKiekis > 2000) {
    console.log('Zvakiu kiekis: ${zvakiuKiekis}. Zvakiu kaina: ${zvakiuKiekis * 0.96} £');
} else if (zvakiuKiekis > 1000) {
    console.log('Zvakiu kiekis: ${zvakiuKiekis}. Zvakiu kaina: ${zvakiuKiekis * 0.97} £');
} else{
    console.log('Zvakiu kiekis: ${zvakiuKiekis}. Zvakiu kaina: ${zvakiuKiekis}£');
}


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let d1 = Math.floor(Math.random() * 101);
let d2 = Math.floor(Math.random() * 101);
let d3 = Math.floor(Math.random() * 101);
let numCount = 3;

let dAvg1 = Math.round((d1 + d2 + d3) / numCount);

if(d1 < 10 || d1 > 90) {
    d1 = 0;
    numCount--;
}
if (d2 < 10 || d2 > 90) {
    numCount--;
}
if(d3 < 10 || d3 > 90) {
    d3 = 0;
    numCount --;
}
let dAvg2 = Math.round((d1 + d2 + d3) / numCount);
console.log(dAvg2);


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let h = Math.floor(Math.random() *24);
let min = Math.floor(Math.random() * 60);
let s = Math.floor(Math.random() * 60)

let papildomosSec = Math.floor(Math.random() * 301);

if(papildomosSec > 59) {
    min += Math.floor(papildomosSec / 60);
    5 += papildomosSec % 60;
} else {
    s += papildomosSec;
}

if(s > 59) {
    min++;
    s = s % 60;
}

if (min > 59) {
    h++;
    s = s % 60;
}

if (h > 23) {
    h = 0;
}
console.log('${n}:${min}:${s}');

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let n1 = Math.floor(Math.random() * 9000 + 1000);
let n2 = Math.floor(Math.random() * 9000 + 1000);
let n3 = Math.floor(Math.random() * 9000 + 1000);
let n4 = Math.floor(Math.random() * 9000 + 1000);
let n5 = Math.floor(Math.random() * 9000 + 1000);
let n6 = Math.floor(Math.random() * 9000 + 1000);

let s1, s2, s3, s4, s5, s6;

s = math.max(n1, n2, n3, n4, n5, n6);

if (s1 === n1) {
    n1 = 0;
} else if (s1 === n2) {
    n2 = 0;
} else if (s1 === n3) {
    n3 = 0;
} else if (s1 === n4) {
    n4 = 0;
} else if (s1 === n5) {
    n5 = 0;
} else {
    n6 = 0;
}
s2 = Math.max(n1,n2,n3,n4,n5,n6)
if (s2 === n1) {
    n1 = 0;
} else if (s2 === n2) {
    n2 = 0;
} else if (s2 === n3) {
    n3 = 0;
} else if ( s2 === n4) {
    n4 = 0;
} else if (s2 === n5) {
    n5 = 0;
} else{
    n6 = 0;
}


s3 = Math.max(n1,n2,n3,n4,n5,n6)
if (s3 === n1) {
    n1 = 0;
} else if (s3 === n2) {
    n2 = 0;
} else if (s3 === n3) {
    n3 = 0;
} else if ( s3 === n4) {
    n4 = 0;
} else if (s3 === n5) {
    n5 = 0;
} else{
    n6 = 0;
}

s4 = Math.max(n1,n2,n3,n4,n5,n6)
if (s4 === n1) {
    n1 = 0;
} else if (s4 === n2) {
    n2 = 0;
} else if (s4 === n3) {
    n3 = 0;
} else if ( s4 === n4) {
    n4 = 0;
} else if (s4 === n5) {
    n5 = 0;
} else{
    n6 = 0;
}


s5 = Math.max(n1,n2,n3,n4,n5,n6)
if (s5 === n1) {
    n1 = 0;
} else if (s5 === n2) {
    n2 = 0;
} else if (s5 === n3) {
    n3 = 0;
} else if ( s5 === n4) {
    n4 = 0;
} else if (s5 === n5) {
    n5 = 0;
} else{
    n6 = 0;
}



s6 = Math.max(n1,n2,n3,n4,n5,n6)
if (s6 === n1) {
    n1 = 0;
} else if (s6 === n2) {
    n2 = 0;
} else if (s6 === n3) {
    n3 = 0;
} else if ( s6 === n4) {
    n4 = 0;
} else if (s6 === n5) {
    n5 = 0;
} else{
    n6 = 0;
}

console.log(s1,s2,s3,s4,s5,s6);