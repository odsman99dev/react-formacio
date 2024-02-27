import { Link } from "react-router-dom";

import Heading from "../../../../shared/components/Heading";
import LoginForm from "../../LoginForm";

const LoginPage = (): React.ReactElement => {
	return (
		<>
			<Heading level={2}> Login</Heading>
			<LoginForm />
			<Link to="/access/register">To register</Link>
		</>
	);
};

export default LoginPage;
