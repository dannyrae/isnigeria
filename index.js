const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config");
const authRoute = require("./routes/auth.route");
const { errorHandler, notFound } = require("./middlewares/error");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use((req, res, next) => {
    const currentTime = new Date().toLocaleString();
    console.log(`[${currentTime}] ${req.method} ${req.path}`);
    next();
});

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello World :)",
    });
});

app.use("/auth", authRoute);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
