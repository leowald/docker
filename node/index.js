const fs = require("fs");
const express = require("express");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

const accounts = JSON.parse(fs.readFileSync("accounts.json"));
console.log(accounts);

app.listen(port, () => {
  console.log("listening on port");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/accounts", (req, res) => {
  res.status(200).json({ status: "Success", accounts: accounts });
});

app.get("/api/accounts/:email", (req, res) => {
  console.log(req.params.email);
  const foundAccount = accounts.find(
    (account) => account.user == req.params.email
  );
  console.log(foundAccount);
  if (!foundAccount)
    res.status(401).json({ status: "Fail", message: "Invaid ID" });
  else res.status(200).json({ status: "Success", account: foundAccount });
});

app.put("/api/accounts/:email", (req, res) => {
  console.log(req.params.email);

  const indexAccount = accounts.findIndex(
    (account) => account.email == req.params.email
  );

  if (indexAccount < 0)
    return res.status(401).json({ status: "Fail", message: "Invaid ID" });
  accounts[indexAccount] = { ...req.body };
  console.log(indexAccount);
  fs.writeFile("accounts.json", JSON.stringify(accounts), (err) => {
    res
      .status(200)
      .json({ status: "Success", account: accounts[indexAccount] });
  });
});

app.patch("/api/accounts/:email", (req, res) => {
  console.log(req.params.email);

  const indexAccount = accounts.findIndex(
    (account) => account.user == req.params.email
  );

  const foundAccount = accounts.find(
    (account) => account.user == req.params.email
  );

  if (indexAccount < 0)
    return res.status(401).json({ status: "Fail", message: "Invaid ID" });
  accounts[indexAccount] = { ...foundAccount, ...req.body };
  console.log(accounts);
  fs.writeFile("accounts.json", JSON.stringify(accounts), (err) => {
    res
      .status(200)
      .json({ status: "Success", account: accounts[indexAccount] });
  });
});

app.delete("/api/accounts/:email", (req, res) => {
  console.log("In delete");
  console.log(req.params.email);

  const indexAccount = accounts.findIndex(
    (account) => account.email == req.params.email
  );
  console.log(indexAccount);
  if (indexAccount < 0)
    return res.status(401).json({ status: "Fail", message: "Invaid ID" });

  const allAccounts = accounts.filter(
    (account) => account.email != req.params.email
  );

  fs.writeFile("accounts.json", JSON.stringify(allAccounts), (err) => {
    res.status(204).json({ status: "Success" });
  });
});

app.post("/api/accounts", (req, res) => {
  accounts.push(req.body);
  fs.writeFile("accounts.json", JSON.stringify(accounts), (err) => {
    res.status(201).json({ status: "Success", account: req.body });
  });
});
