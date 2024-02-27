import React from "react";

import InputField from "./InputField";



type InputProps = React.InputHTMLAttributes<HTMLInputElement>;


interface PasswordFieldProps extends InputProps {
  id: InputProps["id"];
  labelPassword: string;
}

const PasswordField = ({id, labelPassword, ...props}: PasswordFieldProps): React.ReactElement => {
  return (
    <InputField labelText={labelPassword} type="password" id={id} {...props}></InputField>
  )
}

export default PasswordField;
