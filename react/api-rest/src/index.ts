import express, { type Request } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import morgan from "morgan";
import cors from "cors";
import { shops as shopsBase } from "./data/shops.js";
import { type Payload } from "./auth.js";
import { trucks } from "./data/trucks.js";

let shops = [...shopsBase];

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.post(
  "/users/login",
  (
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      { username: string; password: string }
    >,
    res
  ) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {
      const userPayload: JwtPayload & Payload = {
        id: 1,
        username: "admin",
      };

      const token = jwt.sign(userPayload, "PATATA");

      res.json({ token });
    }
  }
);

app.get("/shops", (req, res) => {
  res.json({ shops });
});

app.delete("/shops/:shopId", (req: Request<{ shopId: string }>, res) => {
  shops = shops.filter((shop) => shop.id !== Number(req.params.shopId));

  res.json({});
});

app.get("/trucks", (req, res) => {
  res.json({ trucks });
});

app.listen(4000);
