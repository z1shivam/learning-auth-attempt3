import { Router } from "express";
import signupHandler from "../controller/signup";
import loginhandler from "../controller/login";
import logoutHandler from "../controller/logout";
import authenticated from "../lib/authenticated";

const authRouter = Router();

authRouter.route('/signup').post(signupHandler)
authRouter.route('/login').post(loginhandler)
authRouter.route('/logout').get(authenticated ,logoutHandler)

export default authRouter