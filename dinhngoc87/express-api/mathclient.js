const axios = require("axios");
function MathServiceClient() {
  this.baseURL = process.env.MATH_SERVICE_URL || "http://localhost:3000";
}

MathServiceClient.prototype.sum = async function (data) {
  const config = {
    url: `${this.baseURL}/api/sum`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data,
  };
  const response = await axios(config);
  return response.data;
};
MathServiceClient.prototype.mathSum = async function (data) {
  const config = {
    url: `${this.baseURL}/api/math`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data,
  };
  const response = await axios(config);
  return response.data;
};

module.exports = MathServiceClient;
