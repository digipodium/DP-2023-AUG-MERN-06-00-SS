function addNums(a, b){
    var c = a+b;
    console.log(c);
}

addNums(34, 678);

// console.log(c);

const getAvg = function(m1, m2, m3, m4 = 120){

    console.log(m1, m2, m3, m4);

    let total = ((m1+m2+m3+m4)/800)*100

    // console.log(total+'%');
    return total;
}

let percentage = getAvg(136, 199, 67, 190);

console.log(percentage);


// Arrow Function

const fact = ( n ) => {

    let f = 1;
    for(let i=2; i<=n; i++){
        f = f*i;
    };
    return f;
}

let ans = fact(6);

console.log(ans);

// WAP to check if a number is prime.
// WAP to check if a number is palindrome.
// WAP to take sum of all perfect square from 10 to 100.

let a = 117;
let isPrime = true;

for(let i=2; i<a; i++){
    if(a%i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime) console.log('prime');
else console.log('not prime');

let num1 = 131831;
let rev = 0;
let temp = num1;

while(num1>0){
    let d = num1%10;
    // console.log(rev);
    rev = rev*10 + d;
    num1 = parseInt(num1/10);
}

if(temp === rev){
    console.log('palindrome');
}else{
    console.log('not palindrome');
}


