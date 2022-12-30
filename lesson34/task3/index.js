const baseUrl = "https://63a97540100b7737b9928dc7.mockapi.io/users";

const registerBtn = document.querySelector(".submit-button");

const createData = (data) => {
  const userData = {
    email: data.email,
    name: data.name,
    password: data.password,
  };
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
};
const form = document.querySelector(".login-form");

const disableBtn = () => {
  if (form.reportValidity() === true) {
    registerBtn.removeAttribute("disabled", "");
  } else {
    registerBtn.setAttribute("disabled", "disabled");
  }
};
form.addEventListener("input", disableBtn);

const getServerData = (email) => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((users) => {
      users.map((el) => {
        if (el.email === email) alert(JSON.stringify(el));
      });
    });
};
const getValue = (event) => {
  event.preventDefault();

  const formData = [...new FormData(form)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  const { email } = formData;
  console.log(email);
  createData(formData);

  document.querySelector("form").reset();
  registerBtn.setAttribute("disabled", "disabled");
  getServerData(email);
};

registerBtn.addEventListener("click", getValue);
