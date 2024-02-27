import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./auth/components/pages/LoginPage/loginPage";
import MainMenuPage from "./auth/components/pages/MainMenuPage/MainMenuPage";
import NotFoundPage from "./auth/components/pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./auth/components/pages/RegisterPage/registerPage";
import { authPaths, fullAuthPaths } from "./auth/routing/paths";
import CleanLayout from "./layout/CleanLayout/CleanLayout";
import Layout from "./layout/MainLayout";
import MainLayout from "./layout/MainLayout";
import ShopsListPage from "./shops/pages/ShopsListPage";
import { shopsPaths } from "./shops/routing/paths";

const App = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Layout />}>
					<Route path="" element={<Navigate to={fullAuthPaths.login} />} />
					<Route path="menu" element={<MainMenuPage />} />
				</Route>
				<Route path={authPaths.root} element={<CleanLayout />}>
					<Route path={authPaths.register} element={<RegisterPage />} />
					<Route path={authPaths.login} element={<LoginPage />} />
				</Route>
				<Route path={shopsPaths.root} element={<MainLayout />}>
					<Route path={shopsPaths.list} element={<ShopsListPage />} />
				</Route>
				<Route path="*" element={<CleanLayout />}>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
