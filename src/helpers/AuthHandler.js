import Cookies from "js-cookie";

export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};

export const doLogin = (token, rememberPassword, name, last_name) => {
  if (rememberPassword) {
    Cookies.set(
      "token",
      token,
      { expires: 1 },
      "name",
      name,
      "last_name",
      last_name
    );

    localStorage.setItem("name", name);
    localStorage.setItem("last_name", last_name);
  } else {
    Cookies.set("token", token, "name", name, "last_name", last_name);
  }
};

export const doLogout = () => {
  Cookies.remove("token");
};
