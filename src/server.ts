import express from "express";
import { readFileSync } from "fs";
import path from "path";
const app = express();

const moviesFile = path.join(__dirname, "..", "movies.json");
const movies = JSON.parse(
  readFileSync(moviesFile, {
    encoding: "utf-8",
  })
);

app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("home", { movies });
});

app.listen(3000, () => {
  console.log("listening to port:" + 3000);
});
