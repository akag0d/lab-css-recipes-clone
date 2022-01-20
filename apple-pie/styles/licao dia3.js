const myObj = {
    longKey1: 1,
    key2: 2,
    key3: 3
}

//const myObjConstructor = new Object ();

const myStore = {
    keyboard: 30.99,
    mouse: 15,
    screen: "Not available!",
}
let keyboard = 'keyboard'

//Dot notation
//console.log(myStore.keyboard);

//Bracket notation
//console.log(myStore{keyboard});

myStore.laptop = 1000;
myStore['chair'] = 123;

console.log(myStore);

//in search for the key
console.log('keyboard' in myStore);

//update price

myStore.laptop = 2000;

console.log(myStore);

//delete

delete.myStore.chair;
console.log(myStore)

//Object.keys

let myKeys = Object.keys(myStore);

console.log(myKeys);
console.log(myStore);

//Object.values

let myValues = Object.values(myStore);

console.log(myValues);

//loops
//for in loop

for (let product in myStore) {
    console.log(product: ${product});
    price: ${myStore[product]};
}

// userObject = {}
//name and city

//three objects 
//song1 = {title, artist, genre}