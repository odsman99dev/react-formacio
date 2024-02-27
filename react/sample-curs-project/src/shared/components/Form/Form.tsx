import "./Form.scss";

import { HtmlHTMLAttributes } from "react";

interface FormProps extends HtmlHTMLAttributes<HTMLFormElement> {}

const Form = ({ children, ...props }: FormProps): React.ReactElement => {
	return (
		<form className="form" {...props}>
			{children}
		</form>
	);
};

export default Form;
