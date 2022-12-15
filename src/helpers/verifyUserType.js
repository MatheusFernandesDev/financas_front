function verifyUserType() {
  try {
    const user_type = localStorage.getItem("id_user_type");

    return user_type;
  } catch (err) {
    return -1;
  }
}

export default verifyUserType;
