// const fetchUser = async (userId) => {
//   try {
//     const response = await fetch(`https://api.github.com/users/${userId}`);
//     if (!response.ok) {
//       return null;
//     }
//     const userData = await response.json();
//     return userData;
//   } catch (err) {
//     throw new Error("Failed to fetch user");
//   }
// };

// fetchUser("fkrfuhrekhrk,hrk,")
//   .then((userData) => console.log(userData))
//   .catch((err) => alert(err.message));

//
//
///////////////////////////
//
//
//
// const fetchFunc = async (userId) => {
//   const response = await fetch(`https://api.github.com/users/${userId}`);
//   if (response.ok) {
//     const result = await response.json();
//     return result.blog;
//   }
//   throw new Error("Faild");
// };

const getUsersBlogs = async (users) => {
  return Promise.all(
    users.map(async (userId) => {
      try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (response.ok) {
          const result = await response.json();
          return result.blog;
        }
        throw new Error("Faild");
      } catch (err) {
        alert(err.message);
      }
    })
  );
};

// examples
getUsersBlogs(["google", "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
