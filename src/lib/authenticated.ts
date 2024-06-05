import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.body.user = decoded;
    next();
  } catch (error:any) {
    res.status(401).json({ message: "This is a protected route. You are not logged in." , error: error.message});
  }
}

export default authenticated;