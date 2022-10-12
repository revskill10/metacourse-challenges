const UserServiceClient = require("./client");

const userServiceClient = new UserServiceClient();

user1 = {
  first_name: "Truo$ng",
  last_name: "Dung",
  email: "dung@test.com",
  password: "Dung123",
  password_confirmation: "Dung123",
};

const register = async (user_info) => {
  let result = await userServiceClient.register(user_info);
  return result;
};

register(user1).then(console.log);
