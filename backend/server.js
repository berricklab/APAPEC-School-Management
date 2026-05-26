const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDatabase = require("./config/db");

dotenv.config();
connectDatabase();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/grades", require("./routes/gradesRoutes"));
app.use("/api/fees", require("./routes/feesRoutes"));
app.use("/api/library", require("./routes/libraryRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/timetable", require("./routes/timetableRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/uploads", require("./routes/uploadRoutes"));

io.on("connection", socket => {
    console.log("User Connected");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
