// const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

// function getTasksList() {
//   // put your code here
//   return fetch(baseUrl).then((response) => response.json());
//   //   return new Promise((resolve) => {
//   //     resolve([
//   //       { id: "1", isDone: false },
//   //       { id: "2", isDone: false },
//   //     ]);
//   //   });
// }

// function getTaskById(taskId) {
//   // put your code here
//   return getTasksList()
//     .then((res) => Object.entries(res).map((res) => console.log(res)))
//     .then((array) => [...array].map((obj) => console.log(obj)));
// }

// // examples
// getTasksList().then((tasksList) => {
//   console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
// });

// getTaskById("2").then((taskData) => {
//   console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
// });

//
//
//
///////////////////////////////////////////
//
//
//

// const baseUrl = "https://63a97540100b7737b9928dc7.mockapi.io/users";
// this url I used in another project

function getUsersList() {
  // put your code here
  return fetch(baseUrl).then((users) => users.json());
}

function getUserById(userId) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`);
}

function createUser(userData) {
  // put your code here
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

function deleteUser(userId) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: "DELETE",
  });
}

function updateUser(userId, userData) {
  // put your code here
  return fetch(`${baseUrl}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// examples;
getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById("2").then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: "cool@email.com",
  firstName: "Iron",
  lastName: "Man",
  age: 42,
};

// createUser(newUserData).then(() => {
//   console.log("User created");
// });

deleteUser("3");
