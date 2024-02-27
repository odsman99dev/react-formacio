import { createBrowserRouter } from "react-router-dom";

import LoginForm from "../auth/components/LoginForm";
import RegisterForm from "../auth/components/RegisterForm/RegisterForm";
import Layout from "../layout/MainLayout/MainLayout";

const router = createBrowserRouter([
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "access/login",
				element: <LoginForm />,
			},
			{
				path: "access/register",
				element: <RegisterForm />,
			},
		],
	},
]);

export default router;
