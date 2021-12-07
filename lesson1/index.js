const start = 5;
const end = 21;

let result = 0;

let i = 5;
for (let i = 1; i <= 21; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

let a = 5;

for (let a = 1; a <= 21; a++) {
  if (a % 2 === 0 && a % 4) {
    result += a;
  }
}

for (a = 1; a <= 21; a++) {
  if (a % 3 === 0) {
    result -= a;
  }
}

for (a = 1; a <= 21; a++) {
  if (a % 4 === 0) {
    result *= a;
  }
}
