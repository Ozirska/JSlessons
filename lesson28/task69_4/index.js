// "use strict";

// /**
//  * @param {string} userId
//  * @return {promise}
//  */
// export const requestUserData = (userId) => {
//   // put your code here
//   const request = new Promise((resolve, reject) => {
//     if (userId === "broken") {
//       setTimeout(() => {
//         reject(new Error("User not found"));
//       }, 500);
//     } else {
//       setTimeout(() => {
//         resolve({
//           name: "John",
//           age: 17,
//           userId: `${userId}`,
//           email: `${userId}@example.com`,
//         });
//       }, 1000);
//     }
//   });
//   return request;
// };

// requestUserData("userid777").then((data) => console.log(data));

/////////////////////////////

// const asyncCalculator = (num) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Initial value: ${num}`);
//       resolve(num);
//     }, 500);
//   })
//     .then((value) => {
//       const pr = new Promise((resolve) => {
//         setTimeout(() => {
//           const result = value * value;
//           if (value === 5) {
//             console.log(`Squared value: ${result}`);
//           }

//           resolve(result);
//         }, 500);
//       });
//       return pr;
//     })
//     .then((value) => {
//       const pr = new Promise((resolve) => {
//         setTimeout(() => {
//           const result = value * 2;
//           console.log(`Doubled value: ${result}`);

//           resolve(result);
//         });
//       });
//       return pr;
//     });

// asyncCalculator(5);

/////////////////////////////////////////////

// const successPromise = new Promise((resolve) => {
//   resolve(32);
// });

// /*
//  * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
//  */

// successPromise
//   .then((number) => {
//     const halfNumber = number / 2;
//     return halfNumber;
//   })
//   .then((number) => {
//     /* fix this handler */
//     const squaredNumber = number * number;
//     return squaredNumber;
//   })
//   .then((result) => {
//     console.log(result); // 256
//   });

// /*
//  * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
//  */
// successPromise
//   .then((number) => {
//     /* fix this handler */
//     const result = number * 10;
//     return result;
//   })
//   .then((result) => {
//     console.log(result); // 320
//   });

// console.log(
//   "!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
// );

////////////////////////////////////////////////////

// const serverResponsePromise = new Promise((resolve) => {
//   const serverResponse = {
//     ok: true,
//     json() {
//       return Promise.resolve({
//         name: "John",
//         age: 20,
//       });
//     },
//   };
//   resolve(serverResponse);
// });

// /*
//  * допиши первый обработчик, чтобы во второй попал объект пользователя
//  */

// serverResponsePromise
//   .then((response) => {
//     /* ...code here */
//     return response.json().then((data) => data);
//   })
//   .then((result) => {
//     console.log(result); // { name: 'John', age: 20 }
//   });

// console.log(
//   "!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
// );

//////////////////////////////////////////////////////////

// const getValue = (value, delay) => {
//   return new Promise((resolve, reject) => {
//     if (isNaN(value)) {
//       reject(new Error(`Can't calculate`));
//     } else
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//   });
// };

// const asyncNumber1 = getValue(43, 1000);
// const asyncNumber2 = getValue(7, 2000);

// const getSum = (numbers) => numbers.reduce((acc, num) => acc + Number(num), 0);

// const asyncSum = (...asyncNumbers) => {
//   return Promise.all(asyncNumbers).then((numbers) => getSum(numbers));
// };
//
// asyncSum(asyncNumber1, asyncNumber2).then((result) => console.log(result));

/////////////////////////////////////////////

// const getRandomNumber = (from, to) => from + Math.random() * (to - from);

// const request = (url) =>
//   new Promise((resolve) => {
//     const randomDelay = getRandomNumber(1000, 3000);
//     setTimeout(() => {
//       resolve({
//         userData: {
//           name: "Tom",
//           age: 17,
//         },
//         sourse: url,
//       });
//     }, randomDelay);
//   });

// const servers = [
//   "https://server.com/us/userId",
//   "https://server.com/eu/userId",
//   "https://server.com/au/userId",
// ];

// const getUserASAP = (userId) => {
//   const userUrl = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);

//   const requests = userUrl.map((userUrl) => request(userUrl));

//   return Promise.race(requests);
// };
// getUserASAP("user-id-1").then((res) => console.log(res));

//
//
//
// ////////////////////////////////////////////
//
//
//

// const promiseNumber1 = Promise.resolve(67);
// const promiseNumber2 = Promise.resolve(23);
// const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

// export const resultPromise = (value) => {
//   return new Promise((resolve)=>{resolve(value)})
// };

// const resultPromise = (...asyncNumbers) => {
//   console.log(asyncNumbers);
//   const arr = new Promise((resolve) => {
//     resolve(Promise.all(asyncNumbers));
//   });

//   console.log(arr);
//   return arr;
// };
// const resultPromise = Promise.all([
//   promiseNumber1,
//   promiseNumber2,
//   promiseNumber3,
// ]);

// resultPromise
//   .then((numbersList) => {
//     console.log(numbersList);
//     const sum = numbersList.reduce((acc, num) => acc + num, 0);
//     return sum;
//   })
//   .then((result) => {
//     console.log(result); // 98
//   });
