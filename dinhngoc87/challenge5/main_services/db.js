const redis = require("redis");

let redisClient;
(async () => {
  redisClient = redis.createClient();
  redisClient.on("error", (error) => console.error(`Error: ${error}`));
  await redisClient.connect();
  console.log("connected to db");
  redisClient
    .exists("bao2@test.com", function (err, reply) {
      if (reply === 1) console.log("Exists");
      else console.log("Not exists");
    })
    .then((reply) => {
      if (reply) console.log("Exists");
      else console.log("Not existed");
    });
})();

redisClient.get("ngoc1213121@test.com").then((reply) => {
  if (!reply) console.log("Read fails!!!");
  else console.log(reply);
});
/*
    return  0: success
    return  1: existed
    return -1: error
*/
const save_user_data = (user_info, cb) => {
  console.log("saving data to redis");
  console.log(user_info.email);
  try {
    // const existed_user = await redisClient.get(user_info.email);
    // if (existed_user) {
    //   console.log("existed");
    //   return 1;
    // } else {
    //   console.log("not existed, doing write now;");
    //   await redisClient.set(user_info.email, JSON.stringify(user_info));
    //   return 0;
    // }

    redisClient.exists(user_info.email).then((reply) => {
      if (reply) cb(1);
      else {
        redisClient
          .set(user_info.email, JSON.stringify(user_info))
          .then((reply) => {
            cb(0);
          });
      }
    });
  } catch (err) {
    console.log("caught error: " + err);
    cb(-1);
  }
};

const get_user_data = (email) => {
  return redisClient.get(email);
};

module.exports = { save_user_data, get_user_data };
