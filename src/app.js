import  express  from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./router/auth.routes.js";
import taskRautes from "./router/tasks.routes.js";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRautes);




export default app;

