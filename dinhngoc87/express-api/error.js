const doAsyncJobs = async () => {
  try {
    const result1 = await job1();
    const result2 = await job2(result1);
    const result3 = await job3(result2);
    return await job4(result3);
  } catch (error) {
    console.error(error);
  } finally {
    await anywayDoThisJob();
  }
};

const anywayDoThisJob = () => {
  console.log("Just printing");
};

doAsyncJobs();
