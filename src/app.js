import  express  from "express";
import morgan from "morgan";
import authRoutes from "./router/auth.routes.js";


const app = express();
app.use(morgan('dev'));
app.use(authRoutes);

export default app;

