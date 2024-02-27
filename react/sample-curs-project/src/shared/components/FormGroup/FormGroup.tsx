import "./FormGroup.scss";

import { PropsWithChildren } from "react";



interface FormGroupProps {
  variant: "inline" | "vertical";
}

const FormGroup = ({children, variant}: PropsWithChildren<FormGroupProps> ): React.ReactElement => {
  return (
    <div className={`form__group--${variant}`}>{children}</div>
  )
}

export default FormGroup;
