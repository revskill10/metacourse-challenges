const UserServiceClient = require("./client");

const userServiceClient = new UserServiceClient();

user1 = {
  first_name: "T$23ran",
  last_name: "Bao",
  email: "bao101@test.com",
  password: "Dung1234",
  password_confirmation: "Dung124",
};

const register = async (user_info) => {
  let result = await userServiceClient.register(user_info);
  return result;
};

register(user1).then(console.log);
