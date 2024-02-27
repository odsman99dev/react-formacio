import "./InputField.scss";



type InputProps = React.InputHTMLAttributes<HTMLInputElement>;



interface InputFieldProps extends InputProps {
  id: InputProps["id"];
  labelText: string;
}

const InputField = ({id, labelText, ...props}: InputFieldProps): React.ReactElement => {
  return (
    <>
      <label htmlFor={id} className="form__label">{labelText}</label>
      <input type="text" id={id} className="form__control" {...props}></input>
    </>
  )
}


export default InputField;
