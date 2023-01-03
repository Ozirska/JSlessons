import { fetchUserData, fetchRepositories } from "./gateway.js";
import { renderUserDada } from "./user.js";
import { renderRepos } from "./repos.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};
renderUserDada(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserDada(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      return renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);
