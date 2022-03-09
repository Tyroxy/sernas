
console.log('============ Namu darbas 1 dalis ===========')

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// console.log('*****************************');

/*
1. Programiškai ridenkite du žaidimo kauliukus - 
sugeneruokite du atsitiktinius skaičius nuo 1 iki 6.
Jeigu kauliukų suma didesnė nei 8 jūs laimėjote,
 priešingu atveju pralošėte. Išveskite atsakymą,
kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.
*/

console.log('1.1 Uzduotis')

let met1 = rand(1, 6);
let met2 = rand(1, 6);

const sum1 = met1 + met2;

if (sum1 > 8) {
    console.log(`Jus laimejote, nes isridenta`, met1, `ir`, met2, `, o tasku tasku suma yra`, sum1);
} else {
    console.log(`Jus pralaimejote, nes isridenta`, met1, `ir`, met2, `, o tasku tasku suma yra`, sum1);
}

console.log('*****************************');

/* 
2. Gyveno du katinukai, Pilkis ir Murklys.
Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6.
Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų,
 kuris katinukas yra lengvesnis.
Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. 
Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite,
 kad “katinukų svoriai vienodi”.
*/
console.log('1.2 Uzduotis')

const Pilkis = rand(3, 6);
const Murklys = rand(3, 6);

if (Pilkis > Murklys) {
    console.log(`Pilkis sveria`, Pilkis,`kg, o Murklys sveria`,Murklys, `kg, todel Murklys yra lengvesnis.`);
} else {
    if (Pilkis < Murklys) {
    console.log(`Pilkis sveria ${Pilkis} kg, o Murklys sveria ${Murklys} kg, todel Pilkis yra lengvesnis.`);
    } else {
        if (Pilkis === Murklys) {
        console.log(`Pilkis sveria`, Pilkis,`kg, o Murklys sveria`,Murklys, `kg, todel katinuku svoriai vienodi.`);
        }
    }
}

console.log('*****************************');

/* 
3. Nojus pasiruošė potvyniui ir nusipirko dvi valtis.
Vienoje telpa 15 katinukų, kitoje 15 karvių
(katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių,
maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius
nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. 
Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis
Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”.
Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” 
išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.
*/
console.log('1.3 Uzduotis')

const cats1 = rand(0, 30);
const cows = rand(0, 30);

if (cats1 > 15 || cows > 15) {
    console.log(`Netelpa, nes atejo`, cats1, `katinukai ir`, cows, `karves.`);
} else {
    console.log(`Telpa, nes atejo`, cats1, `katinukai ir`, cows, `karves.`);
}

console.log('*****************************');

/*
4. Antanas nusipirko naują butą ir pinigų jam liko nedaug.
Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: 
televizorių, skalbimo mašiną ar šaldytuvą. Todėl nusprendžia ridenti kauliuką
(atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių,
jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti.
Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
*/
console.log('1.4 Uzduotis')

const point = rand(1, 6);

if (point === 1 || point === 5) {
    console.log(`Iskrito`, point, `taskai, todel Antanas turetu pirkti televizoriu.`);
}
if (point === 3 || point === 4) {
    console.log(`Iskrito ${point} taskai, todel Antanas turetu pirkti skalbimo masina.`);
}
if (point === 2 || point === 6) {
    console.log(`Iskrito ${point} taskai, todel Antanas turetu pirkti saldytuva.`);
}

/*
5. (BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7.
Skaičius atspausdinkite nuo mažiausio iki didžiausio.
Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;
*/
console.log('1.5 Uzduotis')

const array = [];

for (let i = 0; i < 3; i++) {
    const numbers = rand(1, 7);
    array.push(numbers);
}

let rusiavimas = array.sort((a, b) => a - b);

console.log(`Surusiuota skaiciu eile`, rusiavimas);

