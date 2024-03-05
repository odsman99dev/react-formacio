import { useEffect } from "react";

import Heading from "../../shared/components/Heading";
import ShopsTable from "../components/shopsTable/ShopsTable";

const ShopsListPage = () => {
	useEffect(() => {
		fetch("").then((response) => {
			response.json().then((data) => {
				console.log(data);
			});
		});
	}, []);

	return (
		<>
			<Heading level={2}>Sample Shopage</Heading>
			<ShopsTable />
		</>
	);
};

export default ShopsListPage;
