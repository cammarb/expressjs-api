import express from "express";
import dontenv from "dotenv";
import cookieParser from "cookie-parser";
import { connect } from "./src/configs/db.js";

import userRoute from "./src/routes/User.Route.js";

const app = express();
dontenv.config();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoute);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Error message.";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    });
});

app.listen(process.env.PORT, () => {
    connect();
    console.log("Connected to Back End: Express.js");
});
