function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log('****************************');

/*
turiu iskart klausima is ND: kaip veikia
        array.sort(function(a, b){return a - b}); 
*/

const array = [5, 9, 6, 3, 7, 9, 3, 9, 7, 0, 0, 7];
const rusiuotuvas = function(a, b) { return b - a };
    array.sort(rusiuotuvas);

console.log('****************************');

const rabbit = document.querySelector('h1');
    rabbit.style.color = 'orange';
    rabbit.style.backgroundColor = 'green';



console.log('****************************');

// Uzduotis: Barsuką nuspalvinti rudai DONE!

/*
const barsukas = document.querySelector("h2:last-of-type");
document.querySelector("h2:nth-of-type(2)").style.color = "brown"
*/


const barsuk = document.querySelector('h2 + h2');
// const barsuk = document.querySelector('h2:last-of-type');
    barsuk.style.color = 'violet';
    barsuk.style.backgroundColor = 'grey';

const bebr = document.querySelector('h2:first-of-type');
        bebr.style.color = 'brown';
        bebr.style.backgroundColor = 'yellow';


console.log('****************************');





// li.forEach(element => console.log(element.innerText));

const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

console.log(li);     // NodeList

li.forEach(element => console.log(element.innerText));

// 1 var.

// for (let i = 0; i < li.length; i++) {
//     li[i].style.color = 'pink';
// }

// 2 var.
// li.forEach(element => element.style.color = 'red');


// 3 var.
li.forEach((element, i) => {
    element.style.color = 'red';
    console.log(element.innerText, i);
});

console.log(ul.children);


// ul.children.forEach(a => a);

// li.style.color = 'brown';

console.log('****************************');

// Uzduotis: Nuspalvinti sąrašą kokia nors spalva DONE!

const animals = document.querySelectorAll('.animal-list h2');

    animals.forEach((element) => {
        element.style.color = 'red';
});


console.log('****************************');

// Uzduotis: Nuspalvinti sąrašą  trendinėm spalvom DONE!

animals.forEach((element, i) => {
    if (i % 2) {
        element.style.backgroundColor = 'yellow';
    } else {
        element.style.backgroundColor = 'blue';
    }


    // element.style.color = i % 2 ? 'yellow' : 'blue';

});
