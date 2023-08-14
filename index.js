const createError = require("http-errors");
const express = require("express");
const path = require("path");
const flash = require("express-flash");
const session = require("express-session");
const mysql = require("mysql2");
const connection = require("./lib/db");
const usersRouter = require("./routes/users");
const app = express();
const PORT = 3001;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: "true",
    secret: "secret",
  })
);

app.use(flash());
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// app.listen(3000);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
