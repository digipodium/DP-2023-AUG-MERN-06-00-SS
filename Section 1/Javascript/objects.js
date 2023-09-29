const user = {
    name : 'Ramu',
    email : 'ramu@mail.com',
    age : 56,
    password : 'uncbe673',
    'roll-no' : 'A12787'
}

console.log( user.name );
console.log( user['age'] );

console.log(user['roll-no']);

user.city = 'Lucknow';

console.log(user);

user.age = 42;

console.log(user);

const smartphone = {
    brand : 'Samsung',
    model : 's23',
    price : 80000,
    colors : [ 'black', 'blue', 'grey' ]
};

console.log( smartphone.colors[2] );

smartphone.colors[2] = 'red';

console.log(smartphone);

const smartphoneList = [
    { brand: 'Samsung', model : 's23', price : 80000, colors : ['black','blue','grey'] },
    { brand: 'Lava', model : 'Agni', price : 20000, colors : ['red','yellow'] },
    { brand: 'Xiaomi', model : 'Note 13 Pro', price : 60000, colors : ['blue','black'] },
    { brand: 'Oppo', model : 'F21', price : 35000, colors : ['white','silver'] },
    { brand: 'Xiaomi', model : 'K50i', price : 26000, colors : ['black','grey'] },
    { brand: 'Samsung', model : 'M55', price : 30000, colors : ['blue', 'red', 'yellow'] },
];

console.log(smartphoneList[0]);

console.log( smartphoneList[0].colors[1] );

smartphoneList[2].price = 65000;

console.log(smartphoneList[2]);

let brands = smartphoneList.map( (phone) => { return phone.brand } );

console.log(brands);

// create an array of prices
let prices = smartphoneList.map( (phone) => { return phone.price*0.9 } );

console.log(prices);

const budgetPhone = smartphoneList.filter( (phone) => { return phone.price < 50000 } );

console.log(budgetPhone);

let search = 'Samsung';

// WAP to filter phones with brand samsung

const result = smartphoneList.filter((phone) => { return phone.brand === search });

console.log(result);

// WAP to filter smartphone having black color

const blackPhones = smartphoneList.filter( (phone) => { return phone.colors.includes('black') } );

console.log(blackPhones);