const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config();
connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/library", require("./routes/libraryRoutes"));
app.use("/api/fees", require("./routes/feeRoutes"));
app.use("/api/grades", require("./routes/gradeRoutes"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
