function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas1 = ['Vytas', 'Aiste', 'Bebras'];


console.table(namas1);
console.log('namo aukstis: ', namas1.length);

// console.log('Bebras', namas1[2]);

console.log('------------------------------')

const namas2 = [
    ['Vytas', 'Lina'],
    ['Aiste', 'Alina'],
    ['Bebras','Zirafa']
];   

// console.log('Bebras', namas2[2][0]);


// console.table(namas2);
// console.log('namo aukstis: ', namas2.length)

console.log('-------------------------------')

// Uzduotis. Sukurti naują masyvą, 11 aukštų, kurio elementai atsitiktiniai skaičiai nuo 5 iki 25 DONE!



const house1 = [];

for (let i = 0; i < 11; i++) {
    house1.push(rand(5, 25));
}

// console.log('namo aukstis: ', house1.lenght)

console.log('--------------------------------')

// Uzduotis. Sukurt masyvą iš 11 elementų, kiekvienas elementas yra masyvas iš dviejų elementų - atsitiktinių skaičių nuo 5 iki 25. DONE!


const house2 = [];
for (let i = 0; i < 11; i++) {
    // house2.push(rand(5, 25));

    // aukstas
    const floor =[];
    for (let k = 0; k < 2; k++) {
    floor.push(rand(5, 25));
    } 
    // aukstas
    
    house2.push(floor);
}

console.table(house1);
console.table(house2);

console.log('--------------------------------')

// Uzduotis. Imame vokišką hause1 ir naudodami for o poto forEach nuskaitome, kiekvieną narį atskirai išspauszdindami consolėje DONE!



for (let i = 0; i < house1.lenght; i++) {
    console.log(house1[i]); // i -> 0, 1, 2 ... 9, 10
}


// house1.forEach();
// house1.forEach((el) => {} );
// house1.forEach(el) => {

// });

console.log('--------------------------------')

// house1.forEach(el => console.log(el));

house1.forEach((el) => {
    console.log(el);
});

console.log('--------------------------------')


for (let i = 0; i < house2.lenght; i++) {

    for (let k = 0; k < house2[i].lenght; k++) {

        console.log(house2[i][k]); // i -> 0, 1, 2 ... 9, 10
    }

}


// house1.forEach();
// house1.forEach((el) => {} );
// house1.forEach(el) => {

// });


console.table('-----------------------------------')

// lipame per aukstus
house2.forEach(floor => {
    // gauname auksta
    // tada lipame per aukstus
    floor.forEach(flat => {
        // gauname butus
        console.log(flat);
    });

});
