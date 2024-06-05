import app from "./app";
import dbConnect from "./db/db-connect";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 7000;
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on PORT - ${PORT}`);
  });
}).catch((error) => {
  console.error("Error connecting to the database: ", error);
  process.exit(1);
});
