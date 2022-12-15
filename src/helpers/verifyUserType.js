import api from "../service/api";

async function verifyUserType() {
  try {
    const { data: response } = await api.get(`/user-profile`);
    const user_type = response.id_user_type;

    return user_type;
  } catch (err) {
    return -1;
  }
}

export default verifyUserType;
