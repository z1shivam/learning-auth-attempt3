import {Request, Response} from 'express';
const logoutHandler = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token").json({ message: "Logout successful" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export default logoutHandler;