import { type Handler } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export type Payload = {
  id: number;
  username: string;
};

export const auth: Handler = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    jwt.verify(token, "PATATA") as JwtPayload & Payload;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
