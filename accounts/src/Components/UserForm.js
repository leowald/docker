import FormRow from "./FormRow";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function UserForm(props) {
  const [uname, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [pin, updatePin] = useState("");
  function submitHanlder(e) {
    e.preventDefault();
    props.onAdd({ owner: uname, email: email, movements: [], pin: pin });
    updateName("");
    updateEmail("");
    updatePin("");
  }
  return (
    <form onSubmit={submitHanlder}>
      <FormRow for="uname" labelName="Owner">
        <Input
          saveInput={updateName}
          type="text"
          id="uname"
          value2={uname}
        ></Input>
      </FormRow>
      <FormRow for="email" labelName="Email">
        <Input
          saveInput={updateEmail}
          id="email"
          type="text"
          value2={email}
        ></Input>
      </FormRow>
      <FormRow for="pin" labelName="Pin">
        <Input
          saveInput={updatePin}
          id="email"
          type="text"
          value2={pin}
        ></Input>
      </FormRow>
      <div className="right">
        <Button text="Add User"></Button>
      </div>
    </form>
  );
}

export default UserForm;
