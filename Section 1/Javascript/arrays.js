const nums = [12, 456, 234, 78, 23, 7];

console.log(nums);
console.log(nums.length);

const movies = ['Openheimer', 'Dream Girl 2', 'Gadar 2', 'RRR', 'Avengers', 'Flash'];

// indexing
console.log(movies[2]);

console.log( movies.indexOf('Avengers') );

console.log( movies.at(-2));

// slicing
console.log( movies.slice( 1, 5 ) );
console.log( movies.slice( 3 ) );
console.log( movies.slice( 3, -2 ) );
console.log( movies.slice( 3, 4 ) );

// adding elements

movies.push('Red'); // to add element at the end of array
movies.unshift('Batman'); // to add element at the beginning of array
console.log(movies);

// removing elements

movies.pop(); // to remove element from the end of array
movies.shift(); // to remove element from the beginning of array
console.log(movies);

// removes more than 1 element from any index
movies.splice(2, 3);

console.log(movies);

console.log( [ 'new element', ...movies, 'new element', ...nums ] );
console.log( [ ...movies.slice(0, 2), 'new element', ...movies.slice(2) ]);

console.log([...'Mubassir']);

const alpha = ['a', 'b', 'c', 'd']

// z
// someFunc(alpha, 2, 'z')

const insertElement = (arr, index, ele) => {
    return [ ...arr.slice(0, index), ele, ...arr.slice(index) ]
};

console.log( insertElement(alpha, 1, 'z') );

// Object.defineProperty(Array.prototype, 'insertElement', {
//     value: function(index, ele) { return [ ...this.slice(0, index), ele, ...this.slice(index) ]; },
// });

// console.log(movies.insertElement(2, 'x'));