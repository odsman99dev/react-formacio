import React from "react";

import InputField from "./InputField";



type InputProps = React.InputHTMLAttributes<HTMLInputElement>;


interface TextFieldProps extends InputProps {
  id: InputProps["id"];
  labelText: string;
}

const TextField = ({id, labelText, ...props}: TextFieldProps): React.ReactElement => {
  return (
    <InputField labelText={labelText} type="text" id={id} {...props}></InputField>
  )
}

export default TextField;
