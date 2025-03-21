const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
const server = app.listen(port, () => {
  console.log("wow working  ");
});
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed gracefully.");
    process.exit(0);
  });
});
