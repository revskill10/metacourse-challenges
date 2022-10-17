const axios = require("axios");
function UserServiceClient() {
  this.baseURL = process.env.USER_SERVICE_URL || "http://localhost:4000";
}

UserServiceClient.prototype.register = async function (data) {
  const config = {
    url: `${this.baseURL}/api/users/register`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data,
  };
  const response = await axios(config);
  return response.data;
};

module.exports = UserServiceClient;
