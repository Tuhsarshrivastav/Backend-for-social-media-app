const mongooose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongooose.connect(process.env.db, {
      useNewUrlParser: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
