

/* Objektai 1*/


let studentas = {
    vardas: 'Petras',
    pavardė: 'Kazlaitis',
    amžius: 21,
    studijuPrograma: 'Informatika',
    atisiskaitytųKreditųSkaičius: 120,
    pažymia: [9, 8, 7, 10],
    ūgis: 180,
    kursas: 3,
    mokykla: 'Vilniaus universitetas'
};


console.log(studentas);

console.log('Vardas:', studentas.vardas);
console.log('Amžius:', studentas.amžius);
console.log('Mokykla:', studentas.mokykla);

/* 2 */

let filmas = {
    pavadinimas: "Goodfellas",
    režisierius: "Martin Scorsese",
    biudžetas: 25000000,
    uzdarbis: 46836394,
    žanras: "Crime, Drama",
    trukmė: 146,
    išleidimoMetai: 1990,
    aktoriai: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco", "Paul Sorvino"]
}


console.log(filmas)
console.log('Pelnas: ${filmas.pajamos - filmas.biudzetas}')
console.log(filmas.aktoriai.length)
console.log('Sukurtas pries: ${new Date(Date.now()).getFullYear() - filmas.metai}metu.')

/* 3*/

let knyga1 = {
pavadinimas: 'War and Peace',
autorius: 'Leo Tolstoy',
zanras:'novel',
kaina: 14.63,
psl: 1296,
Skyriai: ['chapter1', 'chapter2','chapter3', 'chapter4', 'chapter 361',],
metai: 1867,
knygynuose: true
}

let knyga2 = {
pavadinimas: ' Spare',
autorius: 'Prince Harry',
zanras: 'biography',
kaina: 18.10,
psl: 416,
skyriai: [ 'Out of the Night that Covers Me', ' The Wall','The Spare', 'Lost'],
metai: 2023,
knygynuose:true
}

{
    console.log(knyga1, knyga2);
    console.log(knyga1.psl > knyga2.psl ? "Pirma knyga ilgesnė" : "Antra knyga ilgesnė");
    console.log(knyga1.skyriai.length > knyga2.skyriai.length ? "Pirma knyga turi daugiau skyrių" : "Antra knyga turi daugiau skyrių");

    if (knyga1.kaina > knyga2.kaina) {
        if (knyga2.kaina * 2 > knyga1.kaina) {
            console.log('Dvi pigesnės knygos kainuos daugiau negu viena brangesnė');
        } else {
            console.log('Brangesnė knyga kainuoja daugiau nei dvi pigesnės');
        }
    } else {
        if (knyga1.kaina * 2 > knyga2.kaina) {
            console.log('Dvi pigesnės knygos kainuoja daugiau nei viena brangesnė');
        } else {
            console.log('Brangesnė knyga kainuoja daugiau nei dvi pigesnės');
        }
    }
}


/* 4*/
let preke1 = {
    pavadinimas: "Preke 1",
    kaina: 50,
    savikaina: 30,
    kodas: "P1",
    turimasKiekis: 100,
    dezesMatmenys: {x: 10, y: 5, z: 8}
}

let preke2 = {
    pavadinimas: "Preke 2",
    kaina: 70,
    savikaina: 40,
    kodas: "P2",
    turimasKiekis: 75,
    dezesMatmenys: {x: 12, y: 6, z: 10}
}

let preke3 = {
    pavadinimas: "Preke 3",
    kaina: 90,
    savikaina: 55,
    kodas: "P3",
    turimasKiekis: 50,
    dezesMatmenys: {x: 8, y: 4, z: 6}
}

console.log("Preke1:", preke1);
console.log("Preke2:", preke2);
console.log("Preke3:", preke3);

console.log(`Preke 1 kainuoja - ${preke1.kaina}, Preke 2 kainuoja - ${preke2.kaina}, Preke 3 kainuoja - ${preke3.kaina}`);

let prekes = [preke1, preke2, preke3];
let brangiausiaPreke = prekes[0];

for (let i = 1; i < prekes.length; i++) {
    if (prekes[i].kaina > brangiausiaPreke.kaina) {
        brangiausiaPreke = prekes[i];
    }
}

console.log(`Brangiausia preke: ${brangiausiaPreke.pavadinimas}, Kaina: ${brangiausiaPreke.kaina}`);

console.log(`Preke 1 dezes turis: ${preke1.dezesMatmenys.x * preke1.dezesMatmenys.y * preke1.dezesMatmenys.z}`);
console.log(`Preke 2 dezes turis: ${preke2.dezesMatmenys.x * preke2.dezesMatmenys.y * preke2.dezesMatmenys.z}`);
console.log(`Preke 3 dezes turis: ${preke3.dezesMatmenys.x * preke3.dezesMatmenys.y * preke3.dezesMatmenys.z}`);

console.log(`Pelningumas prekei 1: ${(preke1.kaina - preke1.savikaina) * preke1.turimasKiekis}`);
console.log(`Pelningumas prekei 2: ${(preke2.kaina - preke2.savikaina) * preke2.turimasKiekis}`);
console.log(`Pelningumas prekei 3: ${(preke3.kaina - preke3.savikaina) * preke3.turimasKiekis}`);

/*5 */
let automobilis = {
    marke:"Bmw",
    modelis: "F10",
    rida: 175000,
    gamybosMetai: 2015,
    spalva:"Juoda",
    darbinisTuris: 2.5,
    dauzta: false,
    parduodama: true
}

console.log("Automobilio informacija:")
console.log('Marke: $(automobilis.marke}')
console.log('Modelis: ${automobilis.modelis}')
console.log('Rida : ${automobilis.rida} km')
console.log('Gamybos metai: ${automobilio.gamybosMetai}')
console.log('Spalva: ${automobilio.spalva}')
console.log('Darbinis turis : ${automobilis.darbinisTUris}')
console.log('Dauzta: ${automobilis.dauzta ? "Taip" : "Ne"}')
console.log('Parduodama: ${automobilis.parduodama ? "Taip" : "Ne"}')

let darbartiniaiMetai = new Date().getFullYear()
let amzius = darbartiniaiMetai - automobilis.gamybosMetai
console.log('Automobilis yra ${amzius} metu.')

let nuvaziuotaPerMetus = automobilis.rida / amzius
console.log('Vidutiniskai per metus automobilis nuvaziuoja ${nuvaziuotaPerMetus} km')


/*6*/
let knyga = {
pavadinimas: "Harry Potter and the Sorcerer's Stone",
autorius:"J.K. Rowling",
puslapiuSkaicius: 336,
leidimoMetai: 1997,
kalba:"Anglu",
}

console.log("Knygos informacija:")
console.log('Pavadinimas: ${knyga.pavadinimas}')
console.log('Autorius: ${knyga.autorius}')
console.log('Puslapiu skaicius: ${knyga.puslapiuSkaicius}')
console.log('Leidimo metai: ${knyga.leidimoMetai}')
console.log('Kalba: ${knyga.kalba}')


let dabarMetai = new Date().getFullYear()
let amzius1 = dabarMetai - knyga.leidimoMetai
console.log('Knyga yra ${mazius} metu senumo')

let oroBUkle = {
temeparutra:25,
dregme: 60,
debesuDanga:"Dalinai debesuota",
vejoGreitis:15,
oroSalygos:"Sauleta",
}

console.log("Oro buke:")
console.log('Tempratura: ${oroBukle.tempratura}*C')
console.log('Dregme: ${oroBukle.dregme}%')
console.log('Debesu danga: ${oroBukle.debesuDanga}')
console.log('Vejo greitis: ${oroBukle.vejoGreitis} km/h')
console.log('Oro salygos: ${oroBukle.oroSalygos}')



/* 7 */
let knygynas = {
    pavadinimas: "Knygynas 'Pegasas'",
    adresas: "Gedimino g. 123, Vilnius",
    plotas: 650,
    turimosKnygos: 5000,
    darboValandos: "Pirmadienis - Penktadienis: 9:00 - 18;00, Sestadieniais: 10;00 - 140;00",
    atidarytas: true,
}

for(let savybe in knygynas) {
    console.log('${savybe} : ${knygynas[savybe]}');
}

for(let raktas in knygynas) {
    if(typeof knygynas[raktas] !='string0') {
        console.log(raktas)
    }
}


/* 8 */

let studentas1 = {
    vardas:"Jonas",
    pavarde:"Gaidauskas",
    studijuPrograma: "Informatika",
    pazymiai: [8,9,7,10,8]

}

let studentas2 = {
    vardas:"Giedrius",
    pavarde:"Petuxaitis",
    studijuPrograma: "Fizika",
    pazymiai: [10,10,5,4,10]

}

let pazymiuSuma = 0
for(let pazymys of studentas1.pazymiai) {
    pazymiuSuma += pazymys
}
pazymiuSuma = 0
for(let pazymys of studentas2.pazymiia) {
    pazymiuSuma += pazymys
}

let vid2 = pazymiuSuma / studentas2.pazymiai.length

console.log('Pirmo studento dumenys:')
for(let savybe in studentas1) {
    console.log('${savybe} : ${studentas1[savybe]}')
}

console.log('Vidurkis: ${vid1}')

console.log('Antro studento duomenys:')
for(let savybe in studentas2) {
    console.log('$(savybe): ${studentas2[savybe]}')
}

console.log('Vidurkis: ${vid2}')


console.log(vid1 > vid2 ? 'Studentas ${studentas1.vardas + " " + studentas1.pavarde} turi didesni vidruki' : 'Studentas ${studentas2.vardas + " " + studentas2.pavarde} turi didesni vidurki')


/*9 */
let alus = {
    gamintojas: 'Svyturis',
    kainos:[1.09, 0.69, 0.89, 1.49],
    vidurkis: function () {
        let suma = 0
        for(let eur of this.kainos)  {
            suma += eur
        }
        return suma / this.kainos.length
    }
}

console.log('Alus', alus, '\n')
console.log('Gamintojo kainos:', alus.kainos, '\n')
console.log('Kainu vidurkis:', alus.vidurkis())


/* 10 */
let paslauga = {
    pavadinimas:'tinklapio prieziura',
    menKaina: 30,
    klientai: 348,
    menPajamos: function() {
        console.log('Jei visi klientai uzsisakytu paslauga "${this.pavadinimas}", uzdirbtume ${this.menKaina * this.klientai} kas menesi.')
    }
}

paslauga.menPajamos()


/* 11 */ 

let knygos = [
    {
        pavadinimas: "Knyga 1",
        autorius: "Autorius 1",
        leidimoMetai: 2001
    },
    {
        pavadinimas: "Knyga 2",
        autorius: "Autorius 2",
        leidimoMetai: 2002
    },
    {
        pavadinimas: "Knyga 3",
        autorius: "Autorius 3",
        leidimoMetai: 2003
    }
];

console.log("Visos knygos:");
knygos.forEach(knyga => {
    console.log(`Pavadinimas: ${knyga.pavadinimas}, Autorius: ${knyga.autorius}, Leidimo metai: ${knyga.leidimoMetai}`);
});


console.log("\nPirma knyga:");
console.log(knygos[0]);


console.log("\nAntros knygos autorius:");
console.log(knygos[1].autorius);

/* 12 */

let prekes1 = [
    {
        pavadinimas: "Kompiuteris",
        kaina: 899.99,
        kategorija: "Elektronika"
    },
    {
        pavadinimas: "Knyga",
        kaina: 14.99,
        kategorija: "Literatūra"
    },
    {
        pavadinimas: "stalas",
        kaina: 49.99,
        kategorija: "Baldai"
    }
];


console.log("Visos prekės:");
prekes.forEach(preke => {
    console.log(`Pavadinimas: ${preke.pavadinimas}, Kaina: ${preke.kaina} EUR, Kategorija: ${preke.kategorija}`);
});


/* 13 */

let automobiliai = [
    {
pavadinimas: "Toyota Camry",
gamybosMetai: 2019,
},
 
{ pavadinimas: "Honda Civic",
gamybosMetai: 2020,

},

{pavadinimas: "Ford Mustang",
    gamybosMetai: 2018,
},
]

console.log("Automobiliu informacija:")
for(let automobilis of automobiliai) {
    let dabartiniaiMetai = new Date().getFullYear()
    let amzius = dabartiniaiMetai - automobilis.gamybosMetai

console.log('Pavadinimas: ${automobilis.pavadinimas}')
console.log('Gamybos metai: ${automobilis.gamybosMetai}')
console.log('Amzius: ${amzius} metai')
console.log("-----------------")

}

/* 14 */

let imones = [
{
pavadinimas:"UAB Technologija",
ikurimoMetai: 2000,
darbuotojuKiekis: 150,
pelnas: 1000000
},

{
pavadinimas:"AB Medienia",
ikurimoMetai: 1995,
darbuotojuKiekis: 300,
pelnas: 800000
},

{
pavadinimas: "UAB Maistas",
ikurimoMetai: 2010,
darbuotojuKiekis: 75,
pelnas: 500000,

}

]

console.log("Imoniu informacija")
for(let imone of imones) {
    let dabartiniaiMetai = new Date().getFullYear();
    let imonesAmzius = dabartiniaiMetai - imone,ikurimometai;

console.log('Pavadinimas: ${imone.pavadinimas}');
console.log('Ikurimo metai: ${imone.ikurimoMetai}');
console.log('Imones amzius: ${imonesAmzius) metai');
console.log('Darbuotojo kiekis: $(imone.darbuotojuKiekis)');
console.log('Pelnas: ${imone.pelnas} EUR')
console.log("------------------");

}

let bendrasDarbuotojuKiekis = 0
for(const darbuotojai in imones) {
bendrasDarbuotojuKiekis += imones[darbuotojai].darbuotojuKiekis
}

console.log('Bendras darbuotojo kiekis per visas imones: ${bendrasDarbuotojuKiekis}')

let bendrasPelnas = 0
for (const pelnas in imones) {
bendrasPelnas += imones[pelnas].pelnas
}
console.log('Bendras pelnas per visas imones: ${bendrasPelnas} EUR')


/* 15 */

const ligonines = [
{
    pavadinimas: "Vilniaus universiteto ligonine",
    adresas:"Maironio g.2, Vilnius",
    lankytojuKiekis: 50000,
    darbuotujuKiekis: 1500,

},
{
    pavadinimas:"Santaros Klinikos",
    adresas:"Santariskiu g.2, Vilnius",
    lankytojuKiekis: 60000,
    darbuotujuKiekis: 1800,
},
{
pavadinimas:"Vilniaus Sv. M. Marijos ligonine",
adresas:"Maironio g.9, Vilnius",
lankytojuKiekis: 40000,
darbuotojuKiekis: 1200,

},

]

console.log("Ligoniniu informacija:");
    for (const ligonine of ligonines){
        console.log('Pavadinimas: ${ligonine.pavadinimas}')
        console.log('Adresas: ${ligonine.adresas}')
        console.log("------------------")
    
    }

    const bendrasLankytojuKiekis = ligonines.reduce((suma, ligonine) => suma + ligonine.lankytojuKiekis, 0)
    console.log('Bendras lankytoju kiekis per visas ligonines: ${bendrasLankytojuKiekis}')

    const bendrasDkiekis = ligonines.reduce((suma, ligonine) => suma + ligonine.darbuotujuKiekis, 0)
    console.log('Bendras darbuotoju kiekis per visas ligonines: ${bendrasDkiekis}')

    /* 16 */

    let studentai = [
{
vardas: "Jonas",
pavarde:"Jonaitis",
amzius : 21,
pazymiai: [8, 9, 7, 10, 8],
studijuPrograma:"Informatika",
kursas:3,

},

{
    vardas:"Marius",
    pavarde:"Mariukas",
azmius: 20,
pazymiai: [9, 5, 10, 4, 9],
studijuPrograma:"Ekonomika",
kursas:2.

},

{
vardas:"Laura",
pavarde:"Lauraite",
azmius:22,
pazymiai:[10, 5, 6, 8, 10],
studijuPrograma:"Psichologija",
kursas:4,

},
    ]

    console.log("Studentu informacija:")
    for(let i = 0; i < studentai.length; i++) {
let studentas = studentai[i]
console.log('Studentas: ${studentas.vardas} ${studentas.pavarde}, ${studentas.amzius} m., studiju programa: ${studentas.studijuPrograma}, kursas: ${studentas.kursas}')

console.log("Pazymiai:", studentas.pazymiai.join(', '))

let pazymiuSuma = 0
for (let j = 0; j < studentas.pazymiai.length; j++) {
    pazymiuSuma += studentas.pazymiia[j]
}
const pazymiuVidurkis = pazymiuSuma / studentas.pazymiai.length
console.log('Pazymiu vidurkis: ${pazymiuVidurkis.toFixed(2)}')
    }
console.log("--------------")

let bendraSuma = 0
for (let i = 0; i < studentai.length; i++) {
let studentoSuma = 0
for (let j = 0; j < studentai[i].pazymiai.length; j) {
    studentoSuma += studentai[i].pazymiai[j]

    }
    bendraSuma += studentoSuma
}

let bendrasVidurkis = bendraSuma / (studentai.length * studentai[0].pazymiai.length)
console.log("Bendras visu studentu pazymiu vidurkis:" + bendrasVidurkis.toFixed(2)),


/* 17 */

let parduotuve = {
    pavadinimas:"Mano parduotuve",
    adresas:"Gedimino pr. 1, Vilnius",
    darbuotojuKiekis: 10,
    prekes: [

        {
pavadinimas:"Televizorius",
kodas:"TV123",
kaina:500,
savikaina:350,
turimasKiekis:50,
        },
        {
pavadinimas:"Saldytuvas",
kodas:"FR456",
kaina: 700,
savikaina: 450,
turimasKiekis: 30,
},
{
pavadinimas:"Saldytuvas",
kodas:"MP789",
kaina:300,
savikaina:200,
turimasKiekis:100,
},

    ],
}
 console.log("Parduotves informacia:")
 console.log("Pavadinimas: " + parduotuve.pavadinimas)
 console.log("Adresas: " + parduotuve.adresas)
 console.log("Darbuotoju kiekis " + parduotuve.darbuotojuKiekis)
 console.log("------------------")

 console.log("Prekes:");
 for(let i = 0; i < parduotuve.prekes.length; i++) {
let preke = parduotuve.prekes[i]
console.log("Pavadinimas: " + preke.pavadinimas)
console.log("Kodas " + preke.kodas)
console.log("Kaina: " + preke.kaina + " EUR")
console.log("Savikaina: " + preke.savikaina + " EUR")
console.log("Turimas kiekis: " + preke.turimasKiekis)
console.log("--------------------")
}

let bendrasPrekiuKiekis = 0
for (let i = 0; i < parduotuve.prekes.length; i++) {
bendrasPrekiuKiekis += praduotuve.prekes[i].turimasKiekis
}

console.log("Bendras visu prekiu kiekis parduotuveje " + bendrasPrekiuKiekis + " vnt.")

let daugiausiai = parduotuve.prekes[0]
let maziausiai = parduotuve.prekes[0]
for (let i = 1; i < parduotuve.prekes.length; i++) {
let preke = parduotuve.prekes[i]
if (preke.turimasKiekis > daugiausiai.turimasKiekis) 
    {daugiausiai = preke}
if (preke.turimasKiekis < maziausiai.turimasKiekis) {
    maziausiai = preke
}
}

console.log("preke, turima daugiausiai: " + daugiausiai.pavadinimas)
console.log("Preke, turima maziausiai: " + maziausiai.pavadinimas)
