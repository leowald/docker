import "./Account.css";

function Account(props) {
  return (
    <>
      <div onClick={() => props.onDelete(props.email)} className="account">
        Owner: {props.owner} : ${props.email}{" "}
      </div>
    </>
  );
}

export default Account;
