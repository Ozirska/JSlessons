import { fetchUserData, fetchRepositories } from "./gateway.js";
import { renderUserDada } from "./user.js";
import { renderRepos, cleanReposList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spiner.js";

const defaultUser = {
  avatar_url: "https://avatars3.githubusercontent.com/u10001",
  name: "",
  location: "",
};
renderUserDada(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserDada(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => hideSpinner());

  userNameInputElem.value = "";
};

showUserBtnElem.addEventListener("click", onSearchUser);
