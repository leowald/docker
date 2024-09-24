import logo from "./logo.svg";
import "./App.css";
import Accounts from "./Components/Accounts.js";
import UserForm from "./Components/UserForm.js";
import Card from "./Components/Card.js";

import { put, get, post, remove } from "./ajax.js";
import { useState, useEffect } from "react";

function App() {
  const [accounts, updateAccounts] = useState([]);

  async function getAccounts() {
    try {
      const response = await get("http://localhost:80/api/accounts/");

      updateAccounts(response.accounts);
    } catch {}
  }

  useEffect(() => {
    getAccounts();
  }, []);

  async function addAccount(account) {
    try {
      const response = await post(
        "http://localhost:80/api/accounts/",
        account
      );
      updateAccounts((prev) => [...prev, account]);
    } catch {}
  }

  async function removeAccount(email) {
    try {
      const response = await remove(
        `http://localhost:80/api/accounts/${email}`,
        {}
      );
      updateAccounts((prev) =>
        prev.filter((account) => account.email != email)
      );
    } catch {}
  }

  async function editAccount(email) {
    /*try {
      const response = await patch(
        `http://localhost:80/api/accounts/${email}`,
        {
          movements: [500],
        }
      );
      updateAccounts((prev) => {
        const newArray = [...prev];
        const index = prev.findIndex((account) => account.email == email);
        newArray[index] = {
          owner: "Jessica Jones",
          email: "jessica@gmail.com",
          movements: [500],
          pin: 5555,
        };
        return newArray;
      });
    } catch {} */
  }

  return (
    <div className="App">
      <Card>
        <UserForm onAdd={addAccount}></UserForm>
      </Card>
      <Card>
        <Accounts
          onEdit={editAccount}
          onDelete={removeAccount}
          accountsArr={accounts}
        ></Accounts>
      </Card>
    </div>
  );
}

export default App;
