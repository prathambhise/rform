import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="form-input">
     {/* <label>Username</label>*/}
      <input ref={props.refer} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
