const UserServiceClient = require("./client");

const userServiceClient = new UserServiceClient();

user1 = {
  first_name: "Bui",
  last_name: "Duy",
  email: "duyhp2001a@gmail.com",
  password: "Duy0362328850",
  password_confirmation: "Duy0362328850",
};

const register = async (user_info) => {
  let result = await userServiceClient.register(user_info);
  return result;
};

register(user1).then(console.log);
