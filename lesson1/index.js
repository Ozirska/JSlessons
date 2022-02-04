// const start = 1;
// const end = 21;

// let result = 0;

// for (let start = 1; start <= 21; start++) {
//   if (start <= 5) {
//     console.log(1);
//   } else if (start <= 10) {
//     console.log(2);
//   } else if (start <= 15) {
//     console.log(3);
//   } else if (start <= 20) {
//     console.log(5);
//   }
// }

// function nextPrime(value) {
//   if (value > 2) {
//     var i, q;
//     do {
//       i = 3;
//       value += 2;
//       q = Math.floor(Math.sqrt(value));
//       while (i <= q && value % i) {
//         i += 2;
//       }
//     } while (i <= q);
//     return value;
//   }
//   return value === 2 ? 3 : 2;
// }

// var value,
//   result = [];
// for (var i = 0; i < 10; i++) {
//   value = nextPrime(value);
//   result.push(value);
// }
// console.log(result);

// function isPrime(num) {
//   for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       } else {
//         console.log(i);
//       }
//     }
//   }
// }
// isPrime(10);

// function createEmptyArray(len) {

//   console.log(Array(len));
// }

// createEmptyArray([3, 5, 6]);

//////////////////////////////////////////////////////////

// const getSubArray = (arr, n ) =>  {

// let get = [];
//   for (let i = 0; i < arr.length; i++) {
//     get.push(arr[i]);
//   }

// return (get.slice(0, n));
// }

// getSubArray ([11, 4, 8, 3], 2);
// getSubArray ([1, 2, 3, 4, 5], 3);

////////////////////////////////////////////////////////////////

// function removeDuplicates(array) {
//   if (!Array.isArray) {
//     return null;
//   }
//   let dublicat = [...array];

//   let arr_1 = [...new Set(dublicat)];

//   return arr_1;
// }

// removeDuplicates([4, 5, 7, 4]);

////////////////////////////////////////////////////////

// function removeDuplicates(array) {
//   if (!Array.isArray) {
//     return null;
//   }
//   let dublicat = [...array];

//   let arr_1 = [...new Set(dublicat)];

//   return arr_1.length;
// }

/////////////////////////////////////////////////

// function sortAsc(array) {
//   if (!Array.isArray(array)) return null;

//   let sortNumbers = [...array];
//   sortNumbers.sort(function (a, b) {
//     return a - b;
//   });
//   return sortNumbers;
// }
// sortAsc([4, 2, 5, 1, 34, 7, 1, 8, 234, 9, 7, 23, 8, 5, 8, 22, 18, 88, 28]);

// function sortDesc(array) {
//   if (!Array.isArray(array)) return null;

//   let sortNumbers = [...array];
//   sortNumbers.sort(function (a, b) {
//     return b - a;
//   });
//   return sortNumbers;
// }
// sortDesc([4, 2, 5, 1, 34, 7, 1, 8, 234, 9, 7, 23, 8, 5, 8, 22, 18, 88, 28]);

///////////////////////////////////////////////////////

// function withdraw(clients, balances, client, amount) {
//   let arrClients = [...clients];

//   let indexOfClient = arrClients.indexOf(client);

//   if (balances[indexOfClient] <= amount) {
//     return -1;
//   } else {
//     return (balances[indexOfClient] -= amount);
//   }
// }

// withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

///////////////////////////////////////////////////////////////////////////

// const flatArray = (arr) => {
//   // put your code here
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray.slice().sort((a, b) => a - b);
// };
// const arr = [2, [4, 3], 9, 5];
// flatArray(arr);

/////////////////////////////////////////////////////////////////////////

//put your code here
