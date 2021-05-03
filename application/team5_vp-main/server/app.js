const express = require("express");
const morgan = require("morgan");
const path = require("path");

const restaurantRoutes = require("./routes/restaurants");
const authRoutes = require("./routes/auth");
const searchRoutes = require("./routes/search");
// Error handling
const AppError = require("./utility/AppError");
const GlobalErrorHandler = require("./controller/errorController");

// express app initialized
const app = express();

// Session has been initalized to keep track of server data
const sessions = require("express-session");
const mysqlSessions = require("express-mysql-session")(sessions);

const mysqlSessionsStore = new mysqlSessions(
  {
    /* using default options*/
  },
  require("./config/dbConfig")
);

app.use(
  sessions({
    key: "gatordash",
    secret: "gators",
    store: mysqlSessionsStore,
    resave: false,
    saveUninitialized: false,
  })
);

// Body Parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// for image upload
app.use("/public", express.static(path.join(__dirname, "public")));

// development logging
if (process.env.NODE_ENV == "development") {
  app.use(morgan("development"));
} else if (process.env.NODE_ENV == "production") {
  app.use(morgan("production"));
}

// routes
app.use("/api/v1/restaurants", restaurantRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/search", searchRoutes);

// route middleware
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 401));
});

// Global Error Handler for DB
app.use(GlobalErrorHandler);

module.exports = app;
