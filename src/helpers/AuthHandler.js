import Cookies from "js-cookie";

export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};

export const doLogin = (token, rememberPassword) => {
  console.log(rememberPassword);
  if (rememberPassword) {
    Cookies.set("token", token, { expires: 1 });
  } else {
    Cookies.set("token", token);
  }
};
