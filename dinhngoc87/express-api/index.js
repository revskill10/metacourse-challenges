const MathServiceClient = require("./mathclient");

const mathServiceClient = new MathServiceClient();
const getSum = async (xval, yval) => {
  let result = await mathServiceClient.sum({ x: xval, y: yval });
  return result;
};
const getMathSum = async (xval, yval) => {
  let result = await mathServiceClient.mathSum({
    op: "sum",
    params: [xval, yval],
  });
  return result;
};

getSum(10, 20).then(console.log, console.log);
getMathSum(10, 20).then(console.log);

//setTimeout(() => console.log("HELLO WORLD"), 5000);
