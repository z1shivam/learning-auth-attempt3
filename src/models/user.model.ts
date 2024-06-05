import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String
    }
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = model("User", userSchema);
export default User;