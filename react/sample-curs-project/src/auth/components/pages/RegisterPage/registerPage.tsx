import { Link } from "react-router-dom";

import Heading from "../../../../shared/components/Heading";
import RegisterForm from "../../RegisterForm/RegisterForm";

const RegisterPage = (): React.ReactElement => {
	return (
		<>
			<Heading>Register</Heading>
			<RegisterForm />
			<Link to="/access/login">Access Login</Link>
		</>
	);
};

export default RegisterPage;
