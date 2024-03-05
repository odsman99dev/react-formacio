import "./Layout.scss";

import { Link, Outlet } from "react-router-dom";

import { fullAuthPaths } from "../../auth/routing/paths";
import { NavbarLink } from "../../routing/types";
import Heading from "../../shared/components/Heading";
import Image from "../../shared/components/Image";
import LayoutContener from "../../shared/components/LayoutContener";
import Navbar from "../../shared/components/Navbar/Navbar";
import { shopsFullPaths } from "../../shops/routing/paths";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";

const navbarLinks: NavbarLink[] = [
	{ label: "Login", path: fullAuthPaths.login },
	{ label: "Register", path: fullAuthPaths.register },
	{ label: "Shops List", path: shopsFullPaths.list },
];

const Layout = (): React.ReactElement => {
	return (
		<LayoutContener>
			<Header>
				<Image
					src="./logo.svg"
					width={31}
					height={34}
					className="header-logo"
					alt="bonÀrea Logo"
				/>
				<Heading level={1}>Sample Project</Heading>
			</Header>
			<Sidebar>
				<Navbar linkss={navbarLinks} />
			</Sidebar>
			<MainContent>
				<Outlet />
			</MainContent>
		</LayoutContener>
	);
};

export default Layout;
