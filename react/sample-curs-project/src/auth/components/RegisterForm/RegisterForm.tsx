import Form from "../../../shared/components/Form/Form";
import FormGroup from "../../../shared/components/FormGroup/FormGroup";
import Heading from "../../../shared/components/Heading";
import PasswordField from "../../../shared/components/InputForm/PasswordField";
import TextField from "../../../shared/components/InputForm/TextField";
import TextContener from "../../../shared/components/Text/TextContener";

const RegisterForm = (): React.ReactElement => {
	return (
		<>
			<TextContener>Please enter your data</TextContener>

			<Form>
				<FormGroup variant="vertical">
					<TextField id={"name"} labelText="Your name" />
				</FormGroup>
				<FormGroup variant="vertical">
					<TextField id={"username"} labelText="Username" />
				</FormGroup>
				<FormGroup variant="vertical">
					<PasswordField id={"password"} labelPassword="Password" />
				</FormGroup>
				<FormGroup variant="vertical">
					<button className="button form__action" type="submit">
						Sign up
					</button>
				</FormGroup>
			</Form>
		</>
	);
};

export default RegisterForm;
