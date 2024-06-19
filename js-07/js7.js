/* string literls */

let message1 = 'This my \n'
+ '\'first\' message';
console.log(message1);





/* template 2 literals */
console.log('4+5=${4+5}');
console.log('2*2+2=${2*2+2}');

/* template 3 literals */



/* masyvo papildymas */
let skaiciaPild = [8, 4, 2];

skaiciaPild.push(-3);

skaiciaPild.unshift(-1);

skaiciaiPild.splice(2,0,-10,-7);

console.log('masyvo papildymas', skaiciaPild);


/* masyvo atjungimas */

let pirmas = [4,7,8,6];
let antras = [3,2,5,8];

let sujungtas = pirmas.concat(antras);
console.log('sujungtas',sujungtas);

/* iskarpa */
let skaiciai = [8,9,3,2,5,8,7];
let iskarpa = skaiciai.slice(2,4);
console.log('iskarpa', iskarpa);

/* kopija 1 */
let kopija = skaiciai.slice();
console.log('kopija', kopija);

/* kopij2 */
let kopija2 = [...skaiciai];
console.log('kopija2', kopija2)


/* .... */
let skaiciai1 = [1,2,3,4];
let skaiciai2 = [5,7,9]

let sujungtiSkaiciai=[...skaiciai1, ...skaiciai2];
console.log('sujungti skaiciai', sujungtiSkaiciai);

let skaiciai4 = [8,7,9,6];
let skaiciai5 = [6,9,8];
skaiciai4.push(...skaiciai5);
console.log('papildytas skaiciu masyvas', skaiciai4);


let dog = {
name: 'TOby',
age: 3,
race: 'Beagle',
size: 'small'

}
let puppy = {
    ...dog,
    name:'Max',
    age: 1
}

console.log('puppy objektas', puppy);
console.log('dog objektas', dog);


let pirmiSk=[7,8,9]
let antriSk=[5,7,4]

let sujungtisk=[...pirmiSk, 'a', ...antriSk, 'b']
console.log('sujungti sk', sujungtisk)



let skaiciaiSal=[7,8,6,5,7,4,2,3];
skaiciaiSal.pop()
console.log(skaiciaiSal)

skaiciaiSal.shift()
console.log(skaiciaiSal)

skaiciaiSal.splice(2.3);
console.log(skaiciaiSal)


let skIsvalymui = [1,2,3,4];
let skPriklausomi = skIsvalymui

skIsvalymui=[]

console.log('originalus:', skIsvalymui)
console.log('Priklausomi', skPriklausomi)


let skaiciai6=[4,7,8,9,10,11]
console.log('skaiciai', skaiciai6)

let arYra1= skaiciai6.includes(3)
console.log('ar yra 3', arYra1)

let arYra2= skaiciai6.includes(8)
console.log('ar yra 8', arYra2)


let rastasIndeksas = skaiciai6.indexOf(8)
console.log('skaiciaus 8 indeksas', rastasIndeksas)

let rastPaskutinioIndeksas = skaiciai6.lastIndexOf(8)
console.log('Paskutinis indeksas 8', rastPaskutinioIndeksas);



let zmones = [
{vardas:'Tomas', pavarde: 'Tomauskas', amzius:21,},
{vardas:'Greta', pavarde: 'Gretauskiene', amzius:30,},
{vardas:'Paulius', pavarde: 'Paulauskas', amzius:19,}
]
console.log('zmones', zmones)

let rastasZmogus1 = zmones.find(zmogus =>{return zmogus.vardas === 'Paulius'})

console.log('rastas zmogus', rastasZmogus1)

let nerastasZmogus = zmones.find(zmogus =>{return zmogus.vardas === 'Paulius'})
let rastasZmogus2 = zmones.find(zmogus => zmogus.vardas === 'Paulius')
let rastoZmogausIndeksas = zmones.findIndex(zmogus => zmogus.vardas === ' Greta')

console.log('Rasto zmogaus indeksas', rastoZmogausIndeksas)
console.log('rastas zmogus', rastasZmogus2)






for(let skaicius of skaiciai6) {
    console.log(skaicius)
}
skaiciai6.forEach(function(skaicius) {
    console.log(skaicius)
})

/* antras budas */
skaiciai6.forEach(skaicius => console.log(skaicius))

/* ------- */

let tekstas = skaiciai6.join(', ')
console.log('SUjungtas i teksta', tekstas)

tekstas = ' koks nors sakiys is keliu zodziu'
let zodziai = tekstas.split(' ')
console.log('zodziai is teksto eilutes', zodziai)

console.log(skaiciai6)
let surikuoti = skaiciai6.sort()
console.log('surikiuotas', surikuoti)


let atvirksciai = skaicai6.reverse()
console.log('atvirksciai', atvirksciai)




let courses= [
    {id:1, name:'Node.js'},
    {id: 2, name: 'javascript'},
]

courses.sort(function(a,b) {
    let nameA = a.name.toLocaleLowerCase()
    let nameb = b.name.toLocaleLowerCase()

    if(nameA < nameB) return -1
    if(nameA > nameB) return 1 
    return 0
})

console.log(courses)

let visiTeigiami = skaiciai6.every(function(skaicius) {
    return skaicius > 0
})

console.log('visi skaiciai yra teigiami', visiTeigiami)


skaiciai=[1,-1,2,3]
let yraTeigiamu = skaiciai.some(function(skaicius) {
    return skaicius > 0
})
console.log('yra bent vienas teigiamas', yraTeigiamu)

skaiciai = [7,8,-3,5,-7,2,0,8,-4]
let teigiami = skaiciai.filter(function(skaicius){
    return skaicius > 0
})

console.log('teigiami skaiciai', teigiami)


skaiciai = [4,7,8,9,6,5,8,2]
console.log(skaiciai)
let dvigubi = skaiciai.map(x => x * 2)
console.log('dvigubo skaiciai', dvigubi)

let trigubi = skaiciai.map(x => x * 3)
console.log('trigubi skaiciai', trigubi)

let pak = skaiciai.map(x => x +(x % 2 === 0? ' lyginis ' : ' nelyginis '))
console.log('lyginis ar nelyginis skaicius', pak)


console.log(zmones)

let sarasui = zmones.map(x => '<li>${x.vardas} ${x.pavarde} (${x.amzius} m.)</li>')
console.log('sarasui:', sarasui)


skaiciai = [1,2,3,4]
let punktai = skaiciai.map(x => '<li>' + x + '</li>')
console.log('saraso punktai:',sarasui)

let html = '<ul>' + punktai.join('') + '</ul>'
console.log('galutinis html', html)

let objektai = skaciai.map(x => {
    let obj = {reiksme: x}
    return obj
})

console.log('pakeista i objektus',objektai)



skaiciai =[9,-2,-3,1,2,5,7,-5,6]
atrinkti = skaiciai.filter(x => x > 0)
.sort()
.map(x => '<li>${x}</li>')
console.log('atrinkti sarasui ir surekioti teigiami skaiciai',atrinkti)


/* ilgas budas */
skaiciai = [8,4,2,3,5,7]
let suma = 0
for(let skaicius of skaiciai) {
    suma += skaicius
}

console.log(suma)

/* su reduce funkcija */

suma = skaiciai.reduce((suma, skaicius) => {return suma + skaicius}, 0)
console.log(suma)

const now = new Date()
const date1 = new Date('May 11 2015 09:00 AM')
const date2 = new Date(2018,4,11,9)

now.setFullYear(2022)

console.log(now)
