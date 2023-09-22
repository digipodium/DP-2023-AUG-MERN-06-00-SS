for (let i = 0; i < 10; i++) {
  console.log(i);
}

// print nums from 100 to 1 with a gap of 10

for (let i = 100; i > 0; i -= 10) {
  console.log(i);
}

process.stdout.write("first line");
console.log("second line");

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) process.stdout.write("*");
  console.log();
}

for (let i = 1; i <= 10; i++) {
  console.log("*".repeat(i));
}

let num = 13;
let sqrt = num ** 0.5;

if (sqrt % 1 === 0) {
  console.log("perfect square");
}

// WAP to print all perfect squares in range of 10 - 100

for (let i = 10; i <= 100; i++) {
  let sqrt = i ** 0.5;

  if (sqrt % 1 === 0) {
    console.log(i);
  }
}

// while
let num1 = 28547;
let rev = 0;

while (num1 > 0) {
  let d = num1 % 10;
  console.log(rev);
  rev = rev * 10 + d;
  num1 = parseInt(num1 / 10);
}

console.log(rev);

let sum = 0;
for (let i = 10; i <= 100; i++) {
  let sqrt = i ** 0.5;

  if (sqrt % 1 === 0) {
    console.log(i);
    sum += i;
  }
}

console.log(sum);