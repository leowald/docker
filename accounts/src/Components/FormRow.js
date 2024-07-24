import "./FormRow.css";

function FormRow(props) {
  return (
    <div className="form-row">
      <label htmlFor={props.for}>{props.labelName}</label>
      {props.children}
    </div>
  );
}

export default FormRow;
