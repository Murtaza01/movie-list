import { readFileSync, writeFileSync } from "fs";
import path from "path";

const file = readFileSync(path.join(__dirname, "..", "movies.txt")).toString();

const movies = file.split(/[\r?\n]+/);

const filteredMovies = movies.filter(
  (value) => value.includes("tt") && value.includes("http")
);

const moviesFile = path.join(__dirname, "..", "movies.json");

const moviesArray = JSON.parse(
  readFileSync(moviesFile, {
    encoding: "utf-8",
  })
);

let id = 0;

filteredMovies.map((link, index) => {
  moviesArray.push({ id: id++, link });
  if (index === filteredMovies.length - 1) {
    writeFileSync(moviesFile, JSON.stringify(moviesArray, null, 2));
  }
});
