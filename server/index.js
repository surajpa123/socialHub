import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./controllers/auth.js"
import { register } from "./controllers/auth.js";

// configratons only to use when you set up type to module//

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// routes 
app.post("/auth/register",upload.single("picture"),register)

app.use("/auth", authRoutes)
const upload = multer({ storage });

// mongoose setup

const Port = process.env.PORT || 6000;
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is connected ${Port}`);
    });
  })
  .catch((error) => {
    console.log("Not connected", error);
  });
