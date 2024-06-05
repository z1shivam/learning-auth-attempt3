import { Router } from "express";
import authenticated from "../lib/authenticated";

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.json({ message: "Hello from Server!!" });
});

mainRouter.use("/secure", authenticated);
mainRouter.get("/secure", (req, res) => {
  res.json({
    message: "Welcome to the secure route. You are authenticated.",
    user: req.body.user,
  });
});

export default mainRouter;
