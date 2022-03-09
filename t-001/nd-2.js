
console.log('============ Namu darbas 2 dalis ===========')

function rand(min, max) {           //rand funkcija
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// console.log('*****************************');

/*
1. Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą
ir kiekviename cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti.
Paskutinis skaičius turėtų būti 1. Visas rezultatas turėtų būti toks:
  10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).
*/
console.log('2.1 Uzduotis')

/*
trumpas variantas
for (let i = 0; i < 10; i++) {
    const circo = 10 - i;
console.log(`Liko apvaziuoti ${circo} ratai.`); 
}
*/


for (let i = 0; i < 10; i++) {
    const circ = 10 - i;

    if (circ === 1) {
    console.log(`Liko apvaziuoti ${circ} ratas.`);
    } else {
        if (circ === 10) {
        console.log(`Liko apvaziuoti ${circ} ratu.`);   
            } else {
            console.log(`Liko apvaziuoti ${circ} ratai.`); 
    }   
    }
}

console.log('*****************************');

/*
2. Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų.
Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu.
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą,
rand() funkcija generuokite atsitiktinį automobilio greitį,
o visiems ciklams pasibaigus pateikite bendrą visų 10 ratų vidutinį greitį.
*/
console.log('2.2 Uzduotis')


let speed = 0;
let aver = 0;
let arrspeed = [];
for (let i = 0; i <= 10; i++) {
    arrspeed += i;
    speed = speed + rand(120, 220);
    aver = speed / arrspeed.length;
}
console.log(`Automobilio Nr.55, 10-ies ratų vidutinis greitis - ${Math.round(aver)} km/h.`);


console.log('*****************************');

/*
3.Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. Jo kuro bake liko 44 litrai kuro.
Kiekviename rate automobilis sunaudoja atsitiktinį kiekį kuro: nuo 3 iki 6 litrų.
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą,
o ciklams pasibaigus pateikite išvadą ar automobiliui žteko kuro įveikti visus 10 ratų.
Kurui pasibaigus ciklą nutraukite anksčiau laiko. 
*/
console.log('2.3 Uzduotis')

let fuel = 44;
let rings = [];

for (let i = 0; i < 10; i++) {
    rings = i + 1;
    fuel = fuel - rand(3, 6);
    // console.log(fuel);
    if (fuel <= 0) {
        rings = i;
         break;
    }
}
if (fuel <= 0) {
    console.log(`Kuro neužteko, automobilis iveikė tik ${rings} ratus.`);
} else {
    console.log(`Kuro uzteko iveikti 10 ratu, bake liko ${fuel} l kuro.`);
}


console.log('*****************************');

/*
4. Vyksta automobilių žiedinės lenktynės.
Automobiliui Nr. 55 liko nuvažiuoti 10 ratų (žiedų). Kiekviename žiede yra 5 posūkiai,
kuriuose automobilio greitis yra atsitiktinis dydis nuo 20 iki 120 km/h.
Imituokite tokią situaciją dviem for ciklais (vienas 10 ratų, kitas 5 posūkiai) ir
ciklams pasibaigus atspausdinkite mažiausią automobilio greitį kažkuriame iš posūkių.
*/
console.log('2.4 Uzduotis')



// 1 var.
let spee1 = 120;
let turn1 = 0;
let circ1 = 0;
const sparr = [];

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        const speed1 = rand(20, 120);
        sparr.push(speed1);
        if (spee1 > speed1) {
            spee1 = speed1;
            turn1 = j + 1;
            circ1 = i + 1;
            
        }
    }
}
console.log(sparr);
console.log('Maziausias greitis:', spee1);
console.log('Lenktyniu ratas:', circ1);
console.log(`Lenktyniu ${circ1} rato posukis:`, turn1);

console.log(`Automobilio Nr.55 maziausias ${spee1} km/h greitis buvo ${circ1} rato ${turn1} posukyje.`);


/*
// 2 var.   nebaigtas
const circarr = [];
const speedarr = [];
for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 5; k++) {
        const speed = rand(20, 120);
        circarr.push(i, k);
        speedarr.push(speed);
    }
    
    minSpeed = Math.min(...speedarr);
      
    // circ = i(minSpeed);   ??????????????????????
    // tur = k(minSpeed);    ??????????????????????
}

console.log(speedarr);
console.log(minSpeed);

console.log(`Automobilio Nr.55 maziausias ${minSpeed} km/h greitis buvo {circ} rato {tur} posukyje.`);

console.log('*****************************');
*/

/*
5. (BOSO lygis) Dykumoje vyksta lenktynės.
Automobilis Nr. 55 juose dalyvauja. Kiekviename kilometre gali atsitikti arba
neatsitikti rand(0, 1) tokie trys įvykiai: netikėtai iššokti - neiišokti ant kelio kengūra,
vairuotojas gali nespėti - spėti pasukti vairą ir vairuotojas gali nespėti - spėti
paspausti stabdžius. Imituokite tokią situaciją do while ciklu - vienas kilometras
vienas ciklo prasisukimas. Cikle rand() funkciją atsitiktinai generuokite
visų įvykių tikimybę. Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra,
vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite.
Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.
*/
console.log('2.5 Uzduotis')


// 1 var.
let km = 0; 
let iv = 0;
do {
    iv = rand(0, 1) + rand(0, 1) + rand(0, 1);
    km++;
} while (iv !== 3)

console.log(`Automobilis Nr.55 iki avarijos nuvaziavo ${km} km.`);


// 2 var.
let km1 = 0; 
let iv123 = 0;
do {
    const iv1 = rand(0, 1);
    const iv2 = rand(0, 1);
    const iv3 = rand(0, 1);
    iv123 = iv1 + iv2 + iv3;
    km1++;
} while (iv123 !== 3)

console.log(`Automobilis Nr.55 iki avarijos nuvaziavo ${km1} km.`);


console.log('*****************************');


