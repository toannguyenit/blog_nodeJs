import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

const app = express();
const port = 3000;

// Static file
app.use(express.static("./src/public"));

// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// router

//Home
app.get("/", (req, res) => {
  res.render("home");
});

//New
app.get("/tin-tuc", (req, res) => {
  res.render("news");
});

//quan-ly-ket-qua-kham
app.get("/quan-ly-ket-qua-kham", (req, res) => {
  res.render("qlkqk");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
