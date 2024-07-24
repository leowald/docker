function Input(props) {
  return (
    <input
      onChange={(e) => props.saveInput(e.target.value)}
      id={props.id}
      type={props.type}
      value={props.value2}
    ></input>
  );
}

export default Input;
