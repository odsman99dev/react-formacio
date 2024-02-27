import { useNavigate } from "react-router-dom";

import Form from "../../../shared/components/Form/Form";
import FormGroup from "../../../shared/components/FormGroup/FormGroup";
import PasswordField from "../../../shared/components/InputForm/PasswordField";
import TextField from "../../../shared/components/InputForm/TextField";
import TextContener from "../../../shared/components/Text/TextContener";

const LoginForm = (): React.ReactElement => {
	const navigate = useNavigate();
	const login = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate("/menu");
	};

	return (
		<>
			<TextContener>Please enter your credentials</TextContener>
			<Form onSubmit={login}>
				<FormGroup variant="vertical">
					<TextField id={"username"} labelText="Username" />
				</FormGroup>
				<FormGroup variant="vertical">
					<PasswordField id={"password"} labelPassword="Password" />
				</FormGroup>
				<FormGroup variant="vertical">
					<button className="button form__action" type="submit">
						Login
					</button>
				</FormGroup>
			</Form>
		</>
	);
};

export default LoginForm;
