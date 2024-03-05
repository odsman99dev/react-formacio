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
					{linkss.map((link) => (
						<Link to={link.path}>
							<li>{link.label}</li>
						</Link>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
