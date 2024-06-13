const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://ankitkanchrapara15:DdrZA2QwquZ33Snq@cluster0.fgzjngh.mongodb.net/SIMPLE_FEEDBACK_FORM"
      )
      .then(
        () => {
        console.log("db connected");
      },
        (error) => {
    console.log(error);
  }
 );
 } catch(error) {
    console.log(error);
  }
};
conn();
