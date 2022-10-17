const axios = require("axios");
function CmsValidationClient() {
  this.baseURL = process.env.USER_SERVICE_URL || "http://localhost:4001";
}

CmsValidationClient.prototype.validate = async function (data) {
  const config = {
    url: `${this.baseURL}/api/user_validation`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data,
  };
  const response = await axios(config);
  console.log("NGOC: " + response.data);
  return response.data;
};

module.exports = CmsValidationClient;
