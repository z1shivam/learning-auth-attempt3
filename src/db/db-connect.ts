import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  if (!process.env.MONGO_URI || !process.env.MONGO_DB) {
    console.log(`Database Credentials missing from environment.`);
    process.exit(2);
  }
  try {
    const connectionInstance = await connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`);
    console.log(`Database is connected at ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log(`Database Connection Error! - ${err}`)
    process.exit(1);
  }
};

export default dbConnect
