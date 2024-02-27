import "./Navbar.scss";

import { Link } from "react-router-dom";

import { NavbarLink } from "../../../routing/types";

interface NavbarProps {
	linkss: NavbarLink[];
}

const Navbar = ({ linkss }: NavbarProps): React.ReactElement => {
	return (
		<>
			<nav className="navbar">
				<ul>
					{linkss.map((link) => {
						<li>{link.label}</li>;
					})}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
