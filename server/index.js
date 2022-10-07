const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getchoreList, postChorename, removeChore } = require("./controller");

app.get("/api/chores", getchoreList);
app.get("/sytles", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/styles.css"));
});
app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.js"));
});

app.post("/api/chores", postChorename);
app.delete("/api/chores/:name", removeChore);

app.listen(8080, () => console.log("listening on port 8080"));
