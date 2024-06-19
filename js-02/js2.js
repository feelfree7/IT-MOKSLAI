/*1 */

let num1 = 7
let num2 = 6
let num3 = 3

if(num1 == num2) {}
if(num2 == num3) {}
if(num1 > num2) {}
if(num2 > num3*2) {}
if(num1 % 2== 0) {}
if(num2 % 2!= 0) {}
if(num3 > 0) {}
if(num3 < 0) {}
if(num2 % 4 ==0){}
if(num3 % 8 ==0){}

/*2 */
let amzius = 17
if(amzius >= 18)
    {console.log('jus galite balsuoti')

    }

    amzius >= 18 ? console.log('jus galite balsuoti') : console.log('jus negalite balsuoti')

/*3 */
let grade1 = 7
let grade2 = 9
let grade3 = 4
let grade4 = 5

let vidurkis = (grade1+grade2+grade3+grade4)/4
if('vidurkis >= 5'){
    console.log('vidurkis teigiamas')
}

vidurkis >= 5 ? console.log('vidurkis teigiamas') : console.log('vidurkis neigiamas')


/*4 */
let n = 24
if(n % 5 == 0) {
    console.log('${n} * 1 = ${n * 1}')
    console.log('${n} * 2 = ${n * 2}')
    console.log('${n} * 3 = ${n * 3}')
    console.log('${n} * 4 = ${n * 4}')
    console.log('${n} * 5 = ${n * 5}')
}

if(n % 2 == 0){
    console.log('skaicius: ${n}, kvadratu: ${n**2}, padalinta is dvieju: ${n/2}')
}

if(n % 7 != 0) {
    let n2 = 18
    console.log('${n} + ${n2} = ${n + n2}')
    console.log('${n} + ${n2} = ${n - n2}')
    console.log('${n} + ${n2} = ${n * n2}')
    console.log('${n} + ${n2} = ${n / n2}')

}

/*5 */

let nu1 = 4 
let nu2 = 3
let nu3 = 6

if(nu1 > nu2) {}
else if(nu2 > nu1) {}
else if(nu3 > nu1) {}
else if(nu1 == nu2) {}
else if(nu2 == nu3) {}
else if(nu1 == 0) {}
else if(nu2 < 0) {}
else if(nu3 > 0) {}

/* 6 */

let grade = 7
if (grade == 10) {
    console.log('puiki')
} else if (grade >= 9)
    {
    console.log('labai gerai')
}
else if (grade >=7) {
    console.log('gerai')
} 
else if (grade >= 5) {
    console.log ('patenkinamai')
}
else if(grade < 5) {
    console.log ('egzaminas neislaikytas')
}

/* 7 */
let s = 14
console.log (s %  2 == 0 ? 'lyginis' : 'nelyginis')


/* 8 */
let d = 14
console.log(d % 7 == 0 ? 'dalinasi is 7' : 'nesidalinasi is 7')


/* 9 */ 

let failoKelias = 'kelias/iki/jusu/failo.js'
if(failoKelias.endsWith('js')) {
    console.log('Tai yra JS failas')
} else {
    console.log('Tai ne JS failas')
}

/* 10 */

let i = 15
if(i % 2 == 0) {
    console.log('lyginis')
} else if(i % 5 == 0) {
    console.log('dalinasi is 5')
}  else if (i == 3){
    console.log('Tai yra 3')
} else {
    console.log('klaida')
}

/* 11 */
let sk1 = 6
let sk2 = 17
let sk3 = 11

if(sk == sk2) {
    console.log('${sk1} ir ${sk2} yra lygus')
} else if (sk1 == sk3) {
    console.log ('${sk1} ir ${sk3} yra lygus')
} else if(sk3 > sk1) {
    console.log('${sk3} yra didesnis nei ${sk3}')
} else if (sk2 == sk3 * 2) {
    console.log ('${sk2} yra lygus ${sk3} dvygubai reiksmei')
} else if(sk1 % 3 == 0) {
    console.log('${sk3} yra dalijasi is 3')
} else{
    console.log('log')
}

/* 12 */
let k1 = 9
let k2 = 12
let k3 = 8

if(k1 >= k2 && k1 >= k3) {console.log('Largest', k1)}
else if(k2 >= k1 &&  k2>= k3) {console.log('Largest',k2)}
else {console.log('Largest:', k3)}

/* 13 */
if(k1 <= k2 && k1 <= k3) {console.log('Lowest', k1)}
else if(k2 <= k1 && k2<= k3) {console.log('Lowest',k2)}
else {console.log('Largest:', k3)}

/* 14 */
let gr1 = 9
let gr2 = 8
let gr3 = 7
let ave = (gr1+gr2+gr3)/3

if(ave >= 8 && ave <= 10) {console.log('Nuostabu')}
else if (ave >= 5 && ave <= 8 ) console.log('patenkinamai')
else if(ave < 5 ) {console.log('Prastai')}
else {console.log('klaida')
}

/* 15 */
let kin1 = 14
let kin2 = 8
if(kin1 > kin2 || kin == 0) {}
if(kin2 > kin1 || kin == 5) {}
if(kin1 > kin2 && kin1 == 20) {}
if(kin2 > kin1 && kin2 <100) {}

/* kepykla */


let darboVal = 8

let kepaluPerVal = 30
let darbuotojai = 4
let savikaina = 0.3
let pardavimoKaina = 1.4
let uzsakymai = 1500

let dienosProdukcija = kepaluPerVal * darbuotojai * darboVal
console.log('Kepykla iskeps ${dienosProdukcija} kepalu per diena')

let produkcijosKaina = savikaina * dienosProdukcija
console.log('islaidos: ${produkcijosKaina}')

let pardavimai = pardavimoKaina * dienosProdukcija
console.log('Potencialus pardavimai: ${pardavimai}')

let pelnas = pardavimai - produkcijosKaina
console.log('Potencialus pelnas: ${pelnas}')

if (dienosProdukcija >= uzsakymai) {
    console.log('uzsakymas ivykdytas')
}
else
{ let trukumas = uzsakymai - dienosProdukcija
console.log('uzsakymui ivykdyti truksta: ${trukumas}')
console.log(' Kepykla siandien pajamu negaus.')
}


/* switch1 */
let option = 3
switch(option) {
    case 1:
        console.log('Laimejai vadens')
break
case 2:
    console.log('Laimejai limonada')
break
case 3:
    console.log('Laimejai arbata')
break
case 4:
    console.log('Laimejai kavos')
break
default:
    console.log('klaida')

}


/* switch2 */
let numb1 = 3
let numb2 = 12
let numb3 = 50
switch(numb1) {
    case 1: 
    console.log (numb1+numb2+numb3)
break
case 2:
    console.log(numb2*numb3)
break
case 3:
    console.log(numb1**2)
    break
    default:
        console.log('klaida')
}



/* switch3 */
let klaida = 404
switch(klaida) {
    case 403:
        console.log('Priega neleistina')
break
case 404:
    console.log('Puslapis nerast')
break
case 500:
    console.log('Serverio klaida')
break
default:
    console.log('Nezinoma klaida')
}




/* ciklai */

/* 1 */

for(let i = 0; i <= 10; i++) {
    console.log(i)
}

/* 2 */
for(let i = 0 <= 15; i+= 2;) {
    console.log(i)
}

/* 3 */
for(let i = 1; i <=20; i+=3){
    console.log('${i}')
}

/* 4 */
for(let i = 1; i <= 20; i++)
    {
    if(i % 4 == 0) {console.log(i)

    }
}

/* 5 */
let minSkaicius = 5
let maxSkaicius = 15
if(minSkaicius < maxSkacius) {
    for(let i = minSkaicius; i<= maxSkaicius; i++) {
        console.log(i, i**2)}
}

/* 6 */

let minSk = 5
let maxSk = 15
if(minSk < maxSK) {
    for(let i = minSk; i <= maxSk; i++)
if(i % 2 != 0 || i % 8 == 0) {
    console.log(i)
}
    }

/* 7 */
let result = 0 
for(let i = 0; i < minSk; i++) {
    result += maxSk
}
console.log(result)




/* 8 */

let sum1 = 0;

for (let i = 1; i <= 100; i++) {
    sum1 += i;
}

console.log("Visų skaičių nuo 1 iki 100 suma yra:", sum1);

/* 9 */

let sum2 = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}

console.log("Visų lyginių skaičių nuo 20 iki 50 suma yra:", sum2);

/*10 */

let sum3 = 0;

for (let i = 30; i <= 60; i++) {
    if (i % 2 !== 0) {
        sum3 += i;
    }
}

console.log("Visų nelyginių skaičių nuo 30 iki 60 suma yra:", sum3);

/* 11*/

let sum4 = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum4 += i;
    }
}
console.log(sum4)

/*12 fizzbuzz*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


/* 13 */

const norimasKiekis = 10

let pirmas = 1
let antras = 1
let trecias

console.log(pirmas)
console.log(antras)

for(let i = 2; i < norimasKiekis; i++)
    trecias = pirmas + antras
pirmas = antras
antras = trecias
{console.log(trecias)
}


/* wild - 1 */

let i = 1;

while (i <= 20) {
  if (i <= 20) {
    console.log(i);
  }
  i++;
}

/* 2 */

let i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i + ' - lyginis');
  } else {
    console.log(i + ' - nelyginis');
  }
  i++;
}

/* 3 */ 

let i = 25;

while (i <= 50) {
  if (i % 3 === 0) {
    console.log('skaičius ' + i + ' dalinasi iš 3');
  } else {
    console.log(i);
  }
  i++;
}

/* 4 */

let i = 1;

while (true) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " dalinasi iš 3 ir iš 5");
    break;
  } else {
    console.log(i);
  }
  i++;
}

/* 5 */

let suma10 = 0;
let i = 1;

while (i <= 100) {
  if (i % 2 === 0) {
    suma10 += i;
  }
  i++;
}

console.log("Visų lyginiu skaiciu nuo 1 iki 100 suma yra: " + suma10);

/* 6 */






 
