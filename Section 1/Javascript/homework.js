let [a, b] = [0, 1];
console.log(a);
console.log(b);

for(let i=0; i<8; i++){
    let c = a+b;
    console.log(c);
    // a = b
    // b = c
    [a, b] = [b, c];
}

// old way
for(let i=1; i<=10; i++){
    for(let j=9; j>=i; j--)
        process.stdout.write(' ');
    
    for(let k=1; k<=i; k++)
        process.stdout.write(' *');

    console.log();
}

// new way

for(let i=1; i<=10; i++){
    process.stdout.write(' '.repeat(10-i));
    process.stdout.write(' *'.repeat(i));
    console.log();
}

const names = ['Dhruv', 'Aviral', 'Avinash', 'Mihir', 'Aniket'];

const myNames = names.filter( (n) => { return n.length > 5 } )

console.log(myNames);