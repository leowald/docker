import Account from "./Account";

function Accounts(props) {
  return (
    <div>
      {props.accountsArr.map(function (account) {
        const total = account.movements.reduce(function (sum, current) {
          return (sum += current);
        }, 0);

        return (
          <Account
            email={account.email}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
            owner={account.owner}
            total={total}
          ></Account>
        );
      })}
    </div>
  );
}

export default Accounts;
