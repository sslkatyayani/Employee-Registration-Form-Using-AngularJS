const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/save", (req, res) => {
    let data = req.body;
    let existing = JSON.parse(fs.readFileSync("data.json"));
    existing.push(data);
    fs.writeFileSync("data.json", JSON.stringify(existing, null, 2));
    res.send({message: "Saved"});
});

app.get("/getData", (req, res) => {
    let data = JSON.parse(fs.readFileSync("data.json"));
    res.send(data);
});

app.listen(3000, () => console.log("Server running → http://localhost:3000"));
