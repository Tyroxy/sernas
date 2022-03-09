
console.log('============ Namu darbas 3 dalis ===========')

function rand(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// console.log('*****************************');


const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

console.log('3.1 Uzduotis')

/*
1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po
pridėjimo bitGirls turės 6 elementus).
*/

bitGirls.unshift(`Nauseda`);
console.log(bitGirls);
console.log(bitGirls.length);

console.log('*****************************');

/* 
2. Sukurkite nauja masyva bitCats iš masyvo cats taip kad naujasis
masyvas turetu elementus iš mažu, dvieju nariu, masyvu: pirmas
narys katinuko vardas, antras - katinuko svoris - atsitiktines
tekstines reikšmes - “storas” arba “normalus”.
*/
console.log('3.2 Uzduotis')



/* 
3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.
*/

console.log('3.2 Uzduotis')




console.log('*****************************');

/*
4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo
raidę, abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą
raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę
turėtų atsidurti viršuje.
*/
console.log('3.4 Uzduotis')



console.log('*****************************');

/*
5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą
happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir
katinuko vardo. Nausėdai katinuko neduokit (nes neužteks) ir
Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.
*/
console.log('3.5 Uzduotis')








