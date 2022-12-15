import Cookies from "js-cookie";

export const isLogged = () => {
  let token = Cookies.get("token");
  return token ? true : false;
};

export const doLogin = (
  token,
  rememberPassword,
  name,
  last_name,
  id_user_type
) => {
  if (rememberPassword) {
    Cookies.set(
      "token",
      token,
      { expires: 1 },
      "name",
      name,
      "last_name",
      last_name,
      "id_user_type",
      id_user_type
    );
  } else {
    Cookies.set(
      "token",
      token,
      "name",
      name,
      "last_name",
      last_name,
      "id_user_type",
      id_user_type
    );
  }
};

export const doLogout = () => {
  Cookies.remove("token");
};
