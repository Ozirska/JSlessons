// put your code here

export const finishForm = () => {
  const form = document.querySelector(".login-form");

  const inputLogin = document.createElement("input");
  inputLogin.setAttribute("name", "login");
  inputLogin.setAttribute("type", "text");

  const inputPassword = document.querySelector("input");
  inputPassword.setAttribute("type", "password");

  form.prepend(inputLogin);
  return inputLogin, inputPassword;
};
// finishForm()
